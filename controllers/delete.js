const deletingHandler = (req, res, User) => {
  const {email} = req.body;

  User.findOneAndRemove({email: email}).then((user) => {
    res.json(user.name);
  })
  .catch((e) => {
    res.status(400).json("Something is wrong, your account could not be erased");
  });
}

module.exports = {deletingHandler};
