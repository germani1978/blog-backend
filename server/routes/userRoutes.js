
import { Router } from 'express';
import {
    getUser,
    getUsers,
    deleteUser,
    registerUser,
    updateUser,
    loginUser,
} from '../controllers/userControllers.js'

const router = Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.post('/', registerUser);

router.put('/:id', updateUser);

router.post('/login', loginUser);



export default router;