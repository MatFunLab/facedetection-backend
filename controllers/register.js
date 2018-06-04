

const registerHandler = (req, res, bcrypt, User) => {
  const {email, password, name} = req.body;

  if(!email || !password || !name) {
  return  res.status(400).json("incorrect form submission!");
  }
  let user = new User({
    name: name,
    email: email,
    entries: 0
  });

   bcrypt.hash(password, null, null, (err, hash) => {
    if(err) {
      return console.log(err);
    }
    user.password = hash;
  });

  user.save().then((user) => {
      res.json(user);
    }).catch((e) => {
 //console.log("Error registering ", e);
      res.status(400).send(e);
    });
  }


module.exports = {registerHandler};
