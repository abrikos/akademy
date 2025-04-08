import Mongoose from "server/db/Mongoose";

require('dotenv').config();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

module.exports.controller = function (app) {

    app.post('/api/concurs/form', (req, res) => {
        console.log(req.body)
        if (!req.files) return res.status(406).send('No file uploaded');
        const splitted = req.files.file.name.split('.')
        req.body.ext = splitted[splitted.length - 1]
        Mongoose.concurs.create(req.body)
            .then(async user => {
                const tmp = `${user._id}.${req.body.ext}`;
                const x = await req.files.file.mv(tmp);
                console.log(x)
                //return res.send('OK');
                transporter.sendMail({
                    from: process.env.MAIL_USER,
                    to: ['abrikoz@gmail.com'],
                    subject: 'Ответы на задания конкурса',
                    text: `${user.fio}\n\n${user.school}\n\n${user.email}`,
                    attachments: [
                        {filename: req.body.fio + '.' + req.body.ext, path: tmp},
                    ]
                })
                res.send(user)
            })
    })

    app.get('/api/concurs/list', (req, res) => {
        Mongoose.concurs.find()
            .then(user => res.send(user))
    })

}