import express from 'express';
import fs from 'fs';
import path from 'path'
import fetch from "node-fetch";
import {pipeline} from 'node:stream';
import {promisify} from 'node:util'

const imageController = express.Router();
const streamPipeline = promisify(pipeline);


imageController.get("/image/:fileName",(req,res)=>{
    const {fileName} = req.params;
    
    const file = fs.readFileSync(path.join(process.cwd(),"files","images",fileName))
    res.json({buffer:file,fileName})
});

imageController.get("/test2", async (req,res)=>{
    const request = await fetch("http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/10/?format=json");
    const xd = request.body
    res.status(308)
    xd.pipe(res)
});

export default imageController;