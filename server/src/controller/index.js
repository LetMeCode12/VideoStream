import express from 'express';
import imageController from './image';
import videoController from './video';
const Controller = express.Router();


Controller.use(videoController);
Controller.use(imageController);


export default Controller;