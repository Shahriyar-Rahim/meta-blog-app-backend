// const express = require("express");
// const Blog = require("../models/blog.model");
// const { getAllBlogs, getBlogById, createBlog, deleteBlog, updateBlog } = require("../controllers/blog.contollers");
import {getAllBlogs, getBlogById, createBlog, deleteBlog, updateBlog} from "../controllers/blog.contollers";
import express from "express"
import Blog from "../models/blog.model";
const router = express.Router();

// get all blogs
router.get("/", getAllBlogs);

// get blog by id
router.get("/:id", getBlogById);

// post blog
router.post("/add-post", createBlog);

// delete a blog
router.delete("/:id", deleteBlog);

// update a blog
router.put("/:id", updateBlog);

module.exports = router;
