import { Router } from 'express';
import getUsersController from '../controllers/User/getAll';

import { updateUserSchema, userSchema, loginSchema } from '../schemas';
import loginController from '../controllers/User/login';

import {
  updateUserImageValidator,
  upload,
  validateSchemaMiddleware,
  validateAuth,
} from '../middlewares';

import {
  updateUserImageController,
  createUserController,
  getOneController,
  deleteUserController,
  updateUser,
} from '../controllers/User';
import getUserImage from '../controllers/User/get.user.image';

const userRoutes = Router();
userRoutes.get('/image/:uuid', validateAuth, getUserImage);

userRoutes.get('', getUsersController);
userRoutes.get('/:uuid', validateAuth, getOneController);
userRoutes.post(
  '/register',
  validateSchemaMiddleware(userSchema),
  createUserController
);
userRoutes.post(
  '/login',
  validateSchemaMiddleware(loginSchema),
  loginController
);
// userRoutes.post('/logout');
userRoutes.delete('', validateAuth, deleteUserController);

userRoutes.patch(
  '',
  validateAuth,
  validateSchemaMiddleware(updateUserSchema),
  updateUser
);
userRoutes.patch(
  '/image',
  validateAuth,
  upload.single('image'),
  updateUserImageValidator,
  updateUserImageController
);

export default userRoutes;
