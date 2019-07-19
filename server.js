const express = require("express");
const mongoose = require("mongoose");
const mssql = require("mssql");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB2 Config searches keys.js for sql auth string and path
const db2 = require("./config/keys").mssqlCon;
mssql
  .connect(db2, { useNewUrlParser: true })
  .then(() => console.log("mssql successfully connected"))
  .catch(err => console.log(err));

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}!`));
