const userRoutes = require('express').Router();


const sendMail =require("../utils/sendMail")

userRoutes.post('/sendmail',(req,res)=>{
    sendMail()
    res.send("Hey,I sent an email from NodeMailer")
})

module.exports =userRoutes;
