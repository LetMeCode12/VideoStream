import express from 'express';
import fs from 'fs';
import path from 'path'
const imageController = express.Router();


imageController.get("/image/:fileName",(req,res)=>{
    const {fileName} = req.params;
    
    const file = fs.readFileSync(path.join(process.cwd(),"files","images",fileName))
    res.json({buffer:file,fileName})
});

export default imageController;