import express from 'express';
import {
  createUser,
  deleteUser,
  findOneOrder,
  findUserOrders,
  login,
  updateProfile,
} from './user.controller.js';

export const router = express.Router();

router.post('/sign-up', createUser);

router.post('/login', login);

router.patch('/:id', updateProfile);

router.delete('/:id', deleteUser);

router.get('/orders', findUserOrders);

router.get('/orders/:id', findOneOrder);
