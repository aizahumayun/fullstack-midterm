import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db";
import quotesRoutes from "./routes/QuotesRoutes";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/api/quotes", quotesRoutes)

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on the PORT ${PORT}`)
        })
    }
    catch (error) {
        console.error("Failed to start Server", error)
    }
}
startServer();

// optional test route
app.get("/", (req, res) => {
  res.send("Backend is running on Vercel");
});

export default app