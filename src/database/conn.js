const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/newone").then(() => {
    console.log(`Connection Successfull`);
}).catch((e) => {
    console.log(`No Connnection`);
})