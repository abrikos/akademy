//import moment from "moment";
import transliterate from "transliterate";
import moment from "moment";

const name='registration';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
        fio: {type: String, label: 'ФИО'},
        position: {type: String, label: 'Должность'},
        rank: {type: String, label: 'Звание'},
        phone: {type: String, label: 'Телефон'},
        email: {type: String, label: 'email'},
        form: {type: String, label: 'Форма участия'},
        articleName: {type: String, label: 'Название статьи'},
        isPresentation: {type: String, label: 'Есть презентация'},
        isEducProg: {type: String, label: 'Будет участвовать в образовательной программе'},
        education: {type: String, label: 'Образование'},
        diplom: {type: String, label: 'Диплом'},
        passport: {type: String, label: 'Пасспорт'},
        snils: {type: String, label: 'Снилс'},
        inn: {type: String, label: 'ИНН'},
    },
    {
        timestamps: {createdAt: 'createdAt'},
        //toObject: {virtuals: true},
        // use if your results might be retrieved as JSON
        // see http://stackoverflow.com/q/13133911/488666
        toJSON: {virtuals: true}
    });

modelSchema.virtual('date')
    .get(function () {
        return moment(this.createdAt).format('YYYY-MM-DD HH:mm:ss')
    })


modelSchema.formOptions = {
    label: 'Лекции',
    listOrder: {name: 1},
    listFields: ['name', 'lector'],
    searchFields: ['name']
}

modelSchema.virtual('adminLink')
    .get(function () {
        return `/admin/${name}/${this.id}/update`
    });


modelSchema.virtual('link')
    .get(function () {
        return `/${name}/` + this.id + '/' + (this.name ? transliterate(this.name).replace(/[^a-zA-Z0-9]/g, '-') : '')
    });


export default mongoose.model(name, modelSchema)


