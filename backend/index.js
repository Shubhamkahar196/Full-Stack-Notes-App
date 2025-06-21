require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");

//connecting backend to database
mongoose.connect(config.connectionString)

//import models
const User = require("./models/user.models.js")

const express = require("express");
const cors = require('cors');
const app = express();

const jwt = require("jsonwebtoken");
const { authenticateToken} = require("./utlities.js");


app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
)

app.get("/", (req,res)=>{
    res.json({data: "hello"});
});


//create account 
app.post("/create-account", async (req,res)=>{
    const {fullName, email, password} = req.body;

    if(!fullName){
        return res
        .status(400).json({error:true, message: "Full name in required"});
    }

    if(!email){
         return res
        .status(400).json({error:true, message: "email in required"});
    }

    if(!password){
         return res
        .status(400).json({error:true, message: "email in required"});
    }

    const isUser = await User.findOne({email: email});

    if(isUser) {
        return res.json({
            error: true,
            message: "User already exist"
        })
    }

    const user = new User({
        fullName,
        email,
        password
    })
    await user.save();

    const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET,{
     expiresIn: "30m",
    )}

    // due to some reason we can live tommorrow
    // the code on github you can see 

   
})

app.listen(8000);

module.exports = app;
