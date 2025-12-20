import { Request, Response } from "express";
import Quote from "../models/QuotesModel";
class QuoteController {
  async getAllQuotes(req: Request, res: Response) {
    try {
      const quotes = await Quote.find();
      res.status(200).json(quotes);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  }

  async getQuoteById(req: Request, res: Response) {
    try {
      const quote = await Quote.findById(req.params.id);
      res.status(200).json(quote);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  }

  async createQuote(req: Request, res: Response) {
    try {
      const { quoteId, quote, author } = req.body;
      const newQuote = new Quote({ quoteId, quote, author });
      await newQuote.save();
      res.status(201).json(newQuote);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  }
  async updateQuote(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedQuote = await Quote.findByIdAndUpdate(id, updatedData, {
        new: true,
      });
      res.status(200).json(updatedQuote);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  }
  async deleteQuote(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedQuote = await Quote.findByIdAndDelete(id);
      if (!deletedQuote) {
        res.status(404).json({ message: "Quotes not found" });
      }
      res.status(200).json({ message: "Quote delete successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  }
}

export default QuoteController;
