const { Router } = require('express');

const usersRouter = Router();

const { userController } = require('../../controllers');

usersRouter.get('/', userController.getAllUsers);
usersRouter.post('/add', userController.createUser);
usersRouter.post('/confirm', userController.confirmUser);
usersRouter.post('/password/forgot', userController.forgotPassword);

module.exports = usersRouter;
