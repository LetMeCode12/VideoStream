import express from 'express';
import fs from 'fs';
import path from 'path'

const imageController = express.Router();


imageController.get("/image/:fileName",(req,res)=>{
    const {fileName} = req.params;
    
    const file = fs.readFileSync(path.join(process.cwd(),"files","images",fileName))
    res.json({buffer:file,fileName})
});

imageController.get("/test2", async (req,res)=>{
    const request = await fetch("http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/10/?format=json");
    const data = await request.json()
    res.status(308)
    res.json(data);
});

export default imageController;