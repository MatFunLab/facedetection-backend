const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

if(process.env.PORT === 3000) {
mongoose.connect("mongodb://localhost:27017/facedetection");
}

mongoose.connect("mongodb://heroku_g3hlj416:n577otl6rci8nmjho0i16h3lqr@ds147890.mlab.com:47890/heroku_g3hlj416");
module.exports = {mongoose};
