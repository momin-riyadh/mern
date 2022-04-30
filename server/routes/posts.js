import express from "express";
import {getPosts, createPost, updatePost, deletePost, getPost} from "../controllers/posts.js";

const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);
router.get('/', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;