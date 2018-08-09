const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// if (process.env.PORT === 3000) {
// mongoose.connect("mongodb://localhost:27017/facedetection");
// }
  
}

mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
