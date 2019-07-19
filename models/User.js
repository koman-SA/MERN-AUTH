//const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const mssql = require("mssql");
const Schema = mssql.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
//module.exports = User = mongoose.model("users", UserSchema);
module.exports = User = mssql.model("users", UserSchema);
