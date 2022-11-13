const mongoose = require("mongoose");

const regSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
    },
    password : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    }
})

const Register = new mongoose.model("Register",regSchema);
module.exports = Register;