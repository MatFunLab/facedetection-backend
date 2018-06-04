const signinHandler = (req, res, User, bcrypt) => {
const {email, password} = req.body;

User.findOne({email}).then((user) => {
  bcrypt.compare(password, user.password, (err, result) => {
  if(err) {
    console.log(err);
  }
  if(result) {
    res.json(user);
  } else {
    res.send("Error signing in");
    }
  });
}).catch((e) => {
res.send("User not found!");
});
}

module.exports = {signinHandler};
