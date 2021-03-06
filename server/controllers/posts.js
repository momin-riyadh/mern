import express from 'express';
import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";
const router = express.Router;


// Get Post
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

//Create Post
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (e) {
        res.status(409).json({message: e.message});
    }
}

// Get Post
export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Update Post
export const updatePost = async (req, res) => {
    const {id} = req.params;
    const {title, message, creator, selectedFile, tags} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with the id');
    const updatedPost = {title, message, creator, selectedFile, tags, _id: id};
    await PostMessage.findByIdAndUpdate(id, updatedPost, {new: true})
    res.json(updatedPost);
}

// Delete Post
export const deletePost = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with the ${id}`);
    await PostMessage.findByIdAndRemove(id);
    res.json({message: 'Post Deleted Successfully!'});
}

// Like Post
export const likePost = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with the ${id}`);
 const post = await PostMessage.findById(id);
 const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount: post.likeCount + 1}, {new:true})
    res.json(updatedPost);
}

export default router;