import express from "express";
// import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";

export const app = express();

// using middlewares to fetch data from body through postman api 
app.use(express.json());
app.use(cookieParser());
// using routes
app.use("/api/v1/users",userRouter);
 
// routing
app.get("/",(req,res)=>{
    res.send("<h1> hi this is ritik </h1>");
});

