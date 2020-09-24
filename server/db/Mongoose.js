import User from "server/db/models/Model-User";
import image from "server/db/models/Model-Image";
import post from "server/db/models/Model-Post";
import division from "server/db/models/Model-Division";
import person from "server/db/models/Model-Person";
import meeting from "server/db/models/Model-Meeting";
import edition from "server/db/models/Model-Edition";
import video from "server/db/models/Model-Video";
import document from "server/db/models/Model-Document";
import council from "server/db/models/Model-Council";
import covid from "server/db/models/Model-Covid";
import conference from "server/db/models/Model-Conference";
import lecture from "server/db/models/Model-Lecture";

const mongoose = require("mongoose");
require('dotenv').config();
mongoose.set('useCreateIndex', true);
// подключение
console.log('Mongoose connect...');
mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true});
console.log('Mongoose connected!');
//mongoose.connect("mongodb://108.160.143.119:27017/minterEarth", {useNewUrlParser: true});

const Mongoose = {
    close: function (cb) {
        mongoose.disconnect(cb)
    },
    Types: mongoose.Types,
    connection: mongoose.connection,
    checkOwnPassport: function (model, passport) {
        if (!passport) return false;
        return JSON.stringify(passport.user._id) === JSON.stringify(model.user.id);
    },
    checkOwnCookie: function (model, cookie) {
        if (!cookie) return false;
        if (!cookie.length) return false;
        return cookie.indexOf(model.cookieId) !== -1;
    },
    isValidId: function (id) {
        return mongoose.Types.ObjectId.isValid(id)
    },
    User, image, post, division, person, meeting, edition, video, document, council, covid, conference, lecture

};
export default Mongoose;
