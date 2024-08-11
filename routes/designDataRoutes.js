import express from 'express';
import { getDesignsData, postDesignsData } from '../controllers/designData.js';

export const designDataRouter = express.Router()

designDataRouter.route("/explore-designs").get(getDesignsData);
designDataRouter.route("/upload-design").post(postDesignsData);