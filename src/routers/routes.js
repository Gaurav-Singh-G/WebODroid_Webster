const express = require("express");
const Router = express.Router();
const path = require("path");
const Register = require("../models/register");
const home_path = path.join(__dirname,'../../public/home.html');


Router.route('/register')
.all((req,res,next) => {
    next();
})
.get((req,res,next) => {
    res.sendFile(register_path)
})
.post(async(req,res,next)=>{
    try {
        const registerUser = new Register({
            email     : req.body.email,
            firstName : req.body.firstName,
            lastName  : req.body.lastName,
            password  : req.body.password,
            country   : req.body.country

        })

        const registered = await registerUser.save();
        res.status(201).sendFile(home_path);

        console.log(req.body.First)
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = Router;