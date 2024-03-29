import moment from "moment";
import transliterate from "transliterate"
import striptags from "striptags";

const removeMd = require('remove-markdown');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
        header: {type: String, label: 'Заголовок'},
        text: {type: String, label: 'Текст', control: 'markdown'},
        imgUrl: {type: String},
        url: {type: String, label: 'Адрес на сайте СМИ'},
        isMarkdown: {type: Boolean, label: 'Markdown', default: true},
        editable: Boolean,
        published: {type: Boolean, label: 'Опубликовано'},
        isMassMedia: {type: Boolean, label: 'СМИ о нас'},
        isElection: {type: Boolean, label: 'Выборы'},
        isNoc: {type: Boolean, label: 'НОЦ'},
        isVilui: {type: Boolean, label: 'КНИ Вилюй'},
        isFixed: {type: Boolean, label: 'Фиксированная'},
        views: {type: Number, default: 0},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        images: [{type: mongoose.Schema.Types.ObjectId, ref: 'Image'}],
        image: {type: mongoose.Schema.Types.ObjectId, ref: 'Image'},
        preview: {type: mongoose.Schema.Types.ObjectId, ref: 'Image'},
        isGallery: Boolean
    },
    {
        timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'},
        //toObject: {virtuals: true},
        // use if your results might be retrieved as JSON
        // see http://stackoverflow.com/q/13133911/488666
        toJSON: {virtuals: true}
    });

modelSchema.statics.population = ['image', 'images', 'preview'];

modelSchema.formOptions = {
    label: 'Новости',
    listOrder: {createdAt: -1},
    listFields: ['header', 'date'],
    searchFields: ['header'],
}


modelSchema.virtual('date')
    .get(function () {
        return moment(this.createdAt).format('YYYY-MM-DD HH:mm:ss')
    })
    .set(function (val) {
        this.createdAt = moment(val).format('YYYY-MM-DD HH:mm:ss');

    });

modelSchema.virtual('previewPath')
    .get(function () {
        const image = this.image || this.preview;
        return image ? image.path : this.imgUrl || '/noImage.png'
    });

modelSchema.virtual('adminLink')
    .get(function () {
        return `/admin/news/${this.id}/update`
    });

modelSchema.virtual('shareData')
    .get(function () {
        return {
            header: `${process.env.SITE_NAME} - ${removeMd(this.header)}`,
            text: striptags(removeMd(this.text)),
            image: `${process.env.SITE}${this.image ? this.image.path : '/logo.svg'}`,
            url: `${process.env.SITE}${this.link}`
        }
    });

modelSchema.virtual('link')
    .get(function () {
        if (this.isMassMedia) return this.url || '/';
        return `/news/` + this.id + '/' + (this.header ? transliterate(this.header).replace(/[^a-zA-Z0-9]/g, '-') : '')
    });


export default mongoose.model("Post", modelSchema)


