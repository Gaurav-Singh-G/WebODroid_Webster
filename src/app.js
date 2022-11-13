const express = require("express");
const path = require("path");
const app = express();
require("./database/conn");


const Register = require("./models/register");
// const route = require("./routers/routes");

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname,"../public");
const register_path = path.join(__dirname,"../public/register.html");
const login_path = path.join(__dirname,"../public/login.html");
const home_path = path.join(__dirname,"../public/home.html");


app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
// app.use('/routes', route );

app.get("/",(req,res) => {
    res.sendFile(register_path)
})

app.get("/login",(req,res) => {
    res.sendFile(login_path)
})
app.post("/login",async(req,res)=>{
    try {
        const UserName = req.body.UserName;
        const Password = req.body.Password;
        //const useremail = await Register.find({email:email})
        console.log(`is  and password is ${Password} ${UserName}`)
        // if(useremail.password == Password){
        //     res.status(201).redirect('/home.html');
        // }
        // else {
        //     res.send("Invalid Login Details!")
        // }
    } 
    catch (error) {
        res.status(400).send("Invalid details");
    }
})

// app.post('/login', async (req, res) => {
//     try{
//         let foundUser = Register.find((data) => req.body.email === data.email);
//         if (foundUser) {
    
//             let submittedPass = req.body.password; 
//             let storedPass = foundUser.password; 
    
//             const passwordMatch = await compare(submittedPass, storedPass);
//             if (passwordMatch) {
//                 let usrname = foundUser.username;
//                 res.send(`<div align ='center'><h2>login successful</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3></div><br><br><div align='center'><a href='./login.html'>logout</a></div>`);
//             } else {
//                 res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>");
//             }
//         }
//         else {
//             res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
//         }
//     } catch{
//         res.send("Internal server error");
//     }
// });

app.get("/register",(req,res) => {
    res.sendFile(register_path)
})
app.post("/register",async(req,res)=>{
    try {
        const registerUser = new Register({
            email     : req.body.email,
            firstName : req.body.firstName,
            lastName  : req.body.lastName,
            password  : req.body.password,
            country   : req.body.country

        })

        const registered = await registerUser.save();
        res.status(201).redirect('/home.html');
        //.sendFile(home_path);

        console.log(req.body.First)
    } catch (error) {
        res.status(400).send(error);
    }
    res.sendFile(login_path);
})

app.listen(port,() => {
    console.log(`Server is listening at port no. ${port}`)
})

// const static_path = path.join(__dirname,"../public");
// const template_path = path.join(__dirname,"../templates/views");
// const partials_path = path.join(__dirname,"../templates/partials");
// app.set("view engine","hbs");
// app.set("views",template_path);
// hbs.registerPartials(partials_path);
