
import { Router } from 'express';
import {
    getUser,
    getUsers,
    deleteUser,
    registerUser,
    updateUser,
    loginUser,
    logout,
} from '../controllers/userControllers.js'

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/register', registerUser);
router.put('/:id', updateUser);
router.post('/login', loginUser);
router.post('/logout', logout);

export default router;