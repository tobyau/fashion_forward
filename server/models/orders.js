const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let orderSchema = new Schema({
    _id: Schema.ObjectId,
    email: String,
    promocode: String
});

module.exports = mongoose.model("orders", orderSchema);