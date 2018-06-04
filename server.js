 const express = require("express");
 const bodyParser = require("body-parser");
 const cors = require("cors");
 const {mongoose} = require("./database/mongoose/mongoose");
 const {User} = require("./database/models/user");
 const bcrypt = require("bcrypt-nodejs");

const register = require("./controllers/register");
const profile = require("./controllers/profile");
const image = require("./controllers/image");
const deleteUser = require("./controllers/delete");
const signin = require("./controllers/signin");

const port = process.env.PORT || 3000;
 const app = express();
 app.use(bodyParser.json());
 app.use(cors());



app.get("/", (req, res) => {
  //res.send(database.users);
});


app.post("/signin", (req, res) => {signin.signinHandler(req, res, User, bcrypt)});

app.post("/register", (req, res) => {register.registerHandler(req, res, bcrypt, User)});

app.get("/profile/:email", (req, res) => {profile.profileHandler(req, res, User)});

app.put("/image", (req, res) => {image.imageEntryCount(req, res, User)});

app.post("/imageurl", (req, res) => {image.handleApiCall(req, res)});

app.delete("/profile/:email", (req, res) => {deleteUser.deletingHandler(req, res, User)});

 app.listen(port, () => {
   console.log(`server is up on port ${port}`);
 });
