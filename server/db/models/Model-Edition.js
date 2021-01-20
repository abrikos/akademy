//import moment from "moment";

import transliterate from "transliterate";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
        header: {type:String, label:'Заголовок'},
        year: {type:String, label:'Год'},
        format: {type:String, label:'Формат'},
        text: {type:String, label:'Описание', control:'markdown'},
        //link: {type:String, label:'Ссылка'},
        order: {type:Number, label:'Порядок'},
        images: [{type: mongoose.Schema.Types.ObjectId, ref: 'Image'}],
        image: {type: mongoose.Schema.Types.ObjectId, ref: 'Image'},
    },
    {
        timestamps: {createdAt: 'createdAt'},
        //toObject: {virtuals: true},
        // use if your results might be retrieved as JSON
        // see http://stackoverflow.com/q/13133911/488666
        toJSON: {virtuals: true}
    });
modelSchema.statics.population = ['image', 'images'];
modelSchema.formOptions = {
    label: 'Издание',
    listOrder: {order: -1},
    listFields: ['header'],
    searchFields: ['header'],
}

modelSchema.virtual('adminLink')
    .get(function () {
        return `/admin/edition/${this.id}/update`
    });

modelSchema.virtual('link')
    .get(function () {
        return `/edition/` + this.id + '/' + (this.header ? transliterate(this.header).replace(/[^a-zA-Z0-9]/g, '-') : '')
    });


modelSchema.virtual('photo')
    .get(function () {
        return this.image ? this.image.path : '/noImage.png'
    });

export default mongoose.model("Edition", modelSchema)


