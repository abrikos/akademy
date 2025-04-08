import moment from "moment";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
        fio: String,
        school: String,
        email: String,
        valid: {type: Boolean, default: false},
        ext: String,
    },
    {
        timestamps: {createdAt: 'createdAt'},
        toObject: {virtuals: true},
        // use if your results might be retrieved as JSON
        // see http://stackoverflow.com/q/13133911/488666
        toJSON: {virtuals: true}
    }
);

modelSchema.virtual('date')
    .get(function () {
        return moment(this.createdAt).format('DD.MM.YYYY HH:mm')
    });


export default mongoose.model("ConcursForm", modelSchema)


