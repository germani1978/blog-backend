import { Router } from 'express';
import {
    getBlogs,
    getBlog,
    deleteBlog,
    addBlog,
    updateBlog
} from '../controllers/blogControllers.js'

const router = Router();

//get todos los blogs
router.get('/', getBlogs);

//get 1 blog
router.get('/:id', getBlog);

//delete 1 blog
router.delete('/:id', deleteBlog);

//create 1 blog
router.post('/', addBlog);

// actualiza un blog
router.put('/:id', updateBlog);

export default router;