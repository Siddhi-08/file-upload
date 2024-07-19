const express=require('express');
const fileUpload = require('express-fileupload');
const path=require('path');

const assetsFolder=path.join(__dirname,"assets")

const router=express.Router();
router.use(fileUpload({
    limits:{
        fileSize:10*1024*1024,
    }
}))
router.post('/',(req,res)=>{
    const {avatar}=req.files;
    try {
        avatar.mv(path.join(assetsFolder,avatar.name))
        res.status(200).json({
            message:'ok'
        })
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
    
})

module.exports=router;












 
// i used here npm package fileupload which i used it as a middleware in my function and later i ue req.files to take input from the user and then uses mv means move function in it