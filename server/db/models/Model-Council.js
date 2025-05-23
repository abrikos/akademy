//import moment from "moment";

import transliterate from "transliterate";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
        name: {type: String, label: 'Название'},
        isJoined: {type: Boolean, label: 'Объедененный'},
        isPresidium: {type: Boolean, label: 'УС президиума'},
        chief: {type: mongoose.Schema.Types.ObjectId, ref: 'Person', label: 'Председатель', property: 'fioShort', sort: {fname: 1}},
        deputy: {type: mongoose.Schema.Types.ObjectId, ref: 'Person', label: 'Заместитель', property: 'fioShort', sort: {fname: 1}},
        secretary: {type: mongoose.Schema.Types.ObjectId, ref: 'Person', label: 'Секретарь', property: 'fioShort', sort: {fname: 1}},
        persons: [{type: mongoose.Schema.Types.ObjectId, ref: 'Person', label: 'Персоны', property: 'fioShort', sort: {fname: 1}}],
        description: {type: String, label: 'Описание', control:"markdown"},
    },
    {
        //timestamps: {createdAt: 'createdAt'},
        //toObject: {virtuals: true},
        // use if your results might be retrieved as JSON
        // see http://stackoverflow.com/q/13133911/488666
        toJSON: {virtuals: true}
    });
modelSchema.statics.population = [
    {path: 'persons', populate: ['image', 'divisions', 'councils', 'images', 'councilsChief', 'divisionsChief'], options:{sort:{fname:1}}},
    {path: 'chief', populate: ['image', 'divisions', 'councils', 'images', 'councilsChief', 'divisionsChief'], options:{sort:{fname:1}}},
    {path: 'deputy', populate: ['image', 'divisions', 'councils', 'images', 'councilsChief', 'divisionsChief'], options:{sort:{fname:1}}},
    {path: 'secretary', populate: ['image', 'divisions', 'councils', 'images', 'councilsChief', 'divisionsChief'], options:{sort:{fname:1}}}
];

modelSchema.formOptions = {
    label: 'Ученый совет',
    listOrder: {name: 1},
    listFields: ['name'],
    searchFields: ['name'],
    hasMany: ['persons']
}

modelSchema.virtual('adminLink')
    .get(function () {
        return `/admin/council/${this.id}/update`
    });


modelSchema.virtual('link')
    .get(function () {
        return `/council/` + this.id + '/' + (this.name ? transliterate(this.name).replace(/[^a-zA-Z0-9]/g, '-') : '')
    });


export default mongoose.model("Council", modelSchema)


