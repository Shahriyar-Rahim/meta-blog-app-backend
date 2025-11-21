// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
// middleware
app.use(express.json());
app.use(cors({
  origin:"*"
}));

import router from "./src/routes/blog.routes.js";
// routes
// const blogRoutes = require("./src/routes/blog.routes.js");
app.use('/blogs', router);



// mongoose configuration
async function main() {
  await mongoose.connect(process.env.DB_URL);

  // routes
  app.get("/", (req, res) => {
    res.send("Meta blog server is running...");
  });
}
main()
  .then(() => console.log("mongodb Connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
