import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Add a default port if PORT is not set

connectDb();

// Middlewares
app.use(cors());
app.use(express.json());

// Importing routes
import { userDataRouter } from "./routes/userDataRoutes.js";
import { designDataRouter } from "./routes/designDataRoutes.js";

// Using routes
app.use("/api/user", userDataRouter);
app.use("/api/design", designDataRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
