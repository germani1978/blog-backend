
import { Router } from 'express';
import {
    getUser,
    getUsers,
    deleteUser,
    addUser,
    updateUser,
} from '../controllers/userControllers.js'

const router = Router();

//get todos los user
router.get('/', getUsers);

//get 1 user
router.get('/:id', getUser);

//delete 1 user
router.delete('/:id', deleteUser);

//create 1 user
router.post('/', addUser);

// actualiza un user
router.put('/:id', updateUser);

// router.post('/login', loginUser);


export default router;