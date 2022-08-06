// const express = require("express");
import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

import routerAuth from "./routes/auth";
import routerProduct from "./routes/product";
import routerCategory from "./routes/category";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use("/api", routerProduct);

// connect db

mongoose.connect("mongodb://localhost:27017/nodejs", () => {
    console.log("successfully");
});

app.listen(process.env.PORT, () => {
    console.log("Kết nối thành công, cổng " + process.env.PORT);
});