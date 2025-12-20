import express from "express";
import QuoteController from "../controllers/QuotesController";
const router = express.Router();

const quoteController = new QuoteController();

router.get("/", quoteController.getAllQuotes);
router.get("/:id", quoteController.getQuoteById);
router.post("/", quoteController.createQuote);
router.put("/:id", quoteController.updateQuote);
router.delete("/:id", quoteController.deleteQuote);

export default router;