//import moment from "moment";
import transliterate from "transliterate";

const name='lecture';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
        name: {type: String, label: 'Название'},
        lector: {type: String, label: 'Лектор'},
        date: {type: String, label: 'Дата'},
        description: {type: String, label: 'Описание', control:'markdown'},
    },
    {
        timestamps: {createdAt: 'createdAt'},
        //toObject: {virtuals: true},
        // use if your results might be retrieved as JSON
        // see http://stackoverflow.com/q/13133911/488666
        toJSON: {virtuals: true}
    });
modelSchema.statics.population = [

];

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


