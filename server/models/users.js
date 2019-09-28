const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
    _id: Schema.ObjectId,
    lname: String,
    fname: String,
    address: String,
    phone: Number, 
    email: String
});

module.exports = mongoose.model("users", userSchema);
