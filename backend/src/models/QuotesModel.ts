import mongoose from "mongoose";
const quotes = new mongoose.Schema({
  quoteId: { type: Number, required: true },
  quote: { type: String, required: true },
  author: { type: String, required: true },
});
const Quote = mongoose.model("Quote", quotes);
export default Quote;