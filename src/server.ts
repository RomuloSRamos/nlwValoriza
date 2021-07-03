import dotenv from 'dotenv';
import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import swaggerUI from "swagger-ui-express"
import cors from "cors";

import { router } from "./routes";
import swaggerDocs from "./docs/swagger.json";
import "./database";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs))
app.use('/v1',router);
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    });
  }
  return response.status(400).json({
    status: "error",
    message: "Internal Server Error"
  });
});

app.listen(process.env.PORT || 3000, () => console.log("server is running"));
