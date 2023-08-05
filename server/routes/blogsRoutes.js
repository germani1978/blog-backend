import { Router } from 'express';
import {
    getBlogs,
    getBlog,
    deleteBlog,
    addBlog,
    updateBlog
} from '../controllers/blogControllers.js'

const router = Router();

router.get('/', getBlogs);

router.get('/:id', getBlog);

router.delete('/:id', deleteBlog);

router.post('/', addBlog);

router.put('/:id', updateBlog);

export default router;