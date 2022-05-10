import express from 'express';
import videoController from './video';
const Controller = express.Router();


Controller.use(videoController);

export default Controller;