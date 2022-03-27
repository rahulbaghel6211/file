const express = require("express");
// const { body, validationResult } = require("express-validator");

const User = require("../models/user.models");

const path=require("path")

const uploads=require("../middlewares/uplodas")

const router = express.Router();
router.get("",async(req,res)=>{
    try {

        const users=await User.find().lean().exec();
        
        return res.status(200).send("users");
    } catch (error) {

        return res.status(500).send({message:error.message});
        
    }
})

router.post("",uploads.single("profilepic"),async(req,res)=>{
    try {

        console.log(path.join(__dirname,"../uploads"))
        return res.status(200).send(users);
    } catch (error) {

        return res.status(500).send({message:error.message});
        
    }
})

router.post("/multiple",uploads.array("profilepic",5),async(req,res)=>{
    try {

        // console.log(path.join(__dirname,"../uploads"))
        return res.status(200).send(users);
    } catch (error) {

        return res.status(500).send({message:error.message});
        
    }
})



module.exports = router;

