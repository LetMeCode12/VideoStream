import express from 'express';
import { streamService } from '../../service/video';
const videoController = express.Router();


videoController.get("/stream/:fileName",(req,res)=>{
    const range = req.headers.range;
    const fileName = req.params.fileName;
    const {stream,headers} = streamService(range,fileName);
     
    res.writeHead(206,headers);
    stream.pipe(res);
});

export default videoController;