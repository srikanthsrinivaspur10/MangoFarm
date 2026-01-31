const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: String,
  products: Array,
  totalAmount: Number,
  status: { type: String, default: "Placed" }
});

module.exports = mongoose.model("Order", orderSchema);
