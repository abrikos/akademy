import funcs from "tools/old/import-func"
import Mongoose from "server/db/Mongoose";
import transliterate from 'transliterate';

const fs = require('fs')

async function main() {
    await Mongoose.Post.deleteMany().exec();
    const wgets = [];
    const noImage = 'https://yakutia.science/wp-content/themes/yootheme/cache/AN_4_1-3f82357b.jpeg';
    for (let page = 1; page < 46; page++) {
        const root = await funcs.getDom(funcs.mainSite + '/novosti/page/' + page);
        const articles = root.querySelectorAll('article');
        for (const article of articles) {

            const link = article.querySelector('a').attributes.href;
            const newsRoot = await funcs.getDom(link);

            const headerNode = newsRoot.querySelector('h1');
            if (!headerNode) continue;
            const header = headerNode.rawText.trim();
            const createdAt = newsRoot.querySelector('time').attributes.datetime;
            let textNode = newsRoot.querySelector('[property="text"]');
            if (!textNode) textNode = newsRoot.querySelector('.post');
            if (!textNode) continue;
            console.log(link)
            const paragraphs = textNode.querySelectorAll('p');
            let text = '';
            for (const p of paragraphs) {
                text += p.rawText.trim();
            }
            let image;
            const img = article.querySelector('img');
            if (img) {
                const imgSrc = funcs.mainSite + img.attributes['data-src'];
                if (noImage !== imgSrc) {
                    const file = funcs.getFileName(imgSrc);
                    image = await Mongoose.Image.findOne({name: file.name});
                    if (!image) image = await Mongoose.Image.create(file);
                    wgets.push(`wget -nc -O ${image.path.slice(1)} "${imgSrc}"`);
                }
            }

            const path = transliterate(header).replace(/ /g, '-');
            let postFound = await Mongoose.Post.findOne({header});
            if (!postFound) postFound = await Mongoose.Post.create({header, text, createdAt, image, path});
            console.log(page, header)
            //console.log(image.id)

            const links = textNode.querySelectorAll('a.wp-block-file__button');
            for (const l of links) {
                const fileName = l.attributes.href.match(/\/([^\/]+)\.([^\.]+)$/);
                const file = funcs.getFileName(l.attributes.href)
                file.description = fileName[1];
                let imageModel = await Mongoose.Image.findOne({name: file.name});
                if (!imageModel) imageModel = await Mongoose.Image.create(file);
                postFound.images.push(imageModel);
                await postFound.save()
                wgets.push(`wget -nc -O ${imageModel.path.slice(1)} "${l.attributes.href}"`);
            }

        }

    }
    const file = fs.openSync(`./news-files.sh`, 'w');
    fs.writeSync(file, wgets.join('\n'), null, null);
    fs.closeSync(file);
    Mongoose.close()
}

main()
