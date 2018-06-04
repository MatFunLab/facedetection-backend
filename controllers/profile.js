const profileHandler = (req, res, User) => {
  const {email} = req.params;

  User.findOne({
    email: email

  }).then((user) => {
    if(!user) {
      return console.log("User not found!");
    }
      res.json(user);
  }).catch((e) => {
      res.status(400).json("Error logging in");
      console.log(e);
  });

  if(!email) {
    res.status(404).send("User not found");
  }
  }

  module.exports = {profileHandler};
