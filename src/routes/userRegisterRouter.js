import express from 'express';
import { userRegister } from '../controllers/userRegister.js';
import { hashPassword } from '../middlewares/userRgisterMiddleware.js';
const router = express.Router();
router.post('/register', hashPassword, userRegister);

export default router;