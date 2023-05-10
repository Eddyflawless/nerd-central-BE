import express, { Application, Express } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import helmet from "helmet";

/** Configurations */
dotenv.config();

function createApp(): Application {
  const app: Express = express();
  app.use(express.json());
  app.use(helmet());
  app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
  app.use(morgan("common"));
  app.use(bodyParser.json({ limit: "30mb" }));
  app.use(bodyParser.urlencoded({ limit: "30mb" }));
  app.use(cors());

  return app;
}

console.log("[PEEK]", process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL || "")
  .then(() => {
    console.log(`Connected to MongoDB on ${process.env.MONGO_URL}`);
  })
  .catch((err) => {
    // block createApp from running
    console.error("Failed to connect to MongoDB", err);
    // throw new Error(err);
  });

const app = createApp();
const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Service established on ${process.env.HOST}:${process.env.PORT}`);
});

process.on("unhandledRejection", (reason) => {
  console.log({
    code: "",
    customMessage: { reason }.toString(),
  });
});
