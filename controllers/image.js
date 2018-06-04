const Clarifai = require("clarifai");

const app = new Clarifai.App({
 apiKey: 'f8e44e2fe07a42fc939e8e0898ef6328'
});

const handleApiCall = (req, res) => {
  let imageInput = req.body.imageUrl;
  app.models.predict(Clarifai.FACE_DETECT_MODEL, imageInput)
  .then(data => {
      res.json(data);
    }
  ).catch(e => {
    res.status(400).json("Unable to connect to Clarifai API");
  });
}


const imageEntryCount = (req, res, User) => {
const {email} = req.body;

User.findOneAndUpdate({email: email}, {$inc: {entries: 1}
}).then((user) => {
  res.json(user.entries);
}).catch((e) =>{
  res.status(404).json("User not found");
  console.log(e);
});
}

module.exports = {imageEntryCount, handleApiCall};
