import express from 'express';
import { uploadUserData, getUserData } from '../controllers/userData.js';

export const userDataRouter = express.Router()

userDataRouter.route("/upload-user").post(uploadUserData);
userDataRouter.route("/get-users").get(getUserData);
