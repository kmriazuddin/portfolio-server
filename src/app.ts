import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import httpStatus from "http-status";

// Cors Options
const corsOptions = {
  origin: ["*"],
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

const app = express();
app.use(cors(corsOptions));

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Mohammad Riaz Uddin Portfolio Server! 🌐",
  });
});

// app.use("/api/v1");

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Api Not Found! ⚠️",
    error: {
      path: req.originalUrl,
      message: "Your Requested Path Not Found! 🚫",
    },
  });
});

export default app;
