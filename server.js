import express from "express";
import "./config/mongoose.js";
import apiRouter from "./routes/index.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", apiRouter);

app.listen(port, () => `Server started at http://localhost:${port}`);
