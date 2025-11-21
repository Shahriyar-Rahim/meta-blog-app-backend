// all logic will be in the controller
// const Blog = require("../models/blog.model");
import Blog from "../models/blog.model.js";

// get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    console.log(blogs);
    res.status(200).send({
        message: "Blogs fetched successfully",
        blogs
    })
  } catch (error) {
    console.error("Error getiing blogs", error);
    res.status(404).send({
      message: "Error ftching blogs",
      error,
    });
  }
}
// get blog by id
export const getBlogById = async(req, res) => {
    try {
        const {id} = req.params;
        const blog = await Blog.findById(id);

        if(!blog) {
            return res.status(404).send({
                message: "Blog not found"
            })
        }
        res.status(200).send({
            message: "Blog fetched successfully",
            blog
        })

    } catch (error) {
        console.log("Error getting the blog", error);
        res.send(404).send({
            message: "Error getting the blog",
            error
        })
    }
}

// create a blog
export const createBlog = async (req, res) => {
  try {
    const newBlog = new Blog({
      ...req.body,
    });

    const blog = await newBlog.save();
    res.status(201).send({
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    console.log("Error creating the blog", error);
    res.status(500).send({
      message: "Error creating blog",
      error,
    });
  }
}
// delete a blog
export const deleteBlog = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if(!deletedBlog) {
            return res.status(404).send({
                message: "Blog not found"
            })
        }

        res.status(200).send({
            message: "Blog deleted successfully",
            blog: deletedBlog
        }) 

    } catch (error) {
        console.log("Error deleting blog", error);
        res.status(500).send({
            message: "Error deleting blog",
            error
        })
    }
}

// update a blog
export const updateBlog = async(req, res) => {
    try {
        const {id} = req.params;
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true
        })

        if(!updatedBlog) {
            return res.status(404).send({
                message: "Blog not found"
            })
        }

        res.status(200).send({
            message: "Blog updated successfully",
            blog: updatedBlog
        })
        
    } catch (error) {
        console.log("Update failed", error);
        res.status(500).send({
            message: "Error updating blog",
            error
        })
    }
}


// module.exports = {
//     getAllBlogs,
//     getBlogById,
//     // createBlog,
//     deleteBlog,
//     updateBlog
// }

