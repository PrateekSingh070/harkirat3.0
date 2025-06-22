const express = require("express");
const bcrypt=require("bcrypt");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "prateeksingh";

mongoose.connect("mongodb+srv://prateeksingh7652000017:tmmSGtJOacIKCIw8@cluster0.u9hib6r.mongodb.net/todosneww2");

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    const { email, password, name } = req.body;

    const hashpassword=await bcrypt.hash(password,5);

    try {
        await UserModel.create({
            email,
            name,
            password: hashpassword
        });
        res.json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error creating user", error: err.message });
    }
});

app.post("/signin", async function (req, res) {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email});

        if(!user){
            req.status(403).json({
                message:"user does not exists"
            })
            return
        }

        const passwordMatch=bcrypt.compare(password,res.password);

        if (passwordMatch) {
            const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);
            res.json({
                token: token,
                message: "Login successful"
            });
        } else {
            res.status(403).json({ message: "Incorrect credentials" });
        }
    } catch (err) {
        res.status(500).json({ message: "Error signing in", error: err.message });
    }
});

app.post("/todo", auth,function (req, res) {
    const userId=req.userId;
    const title=req.body.title

     res.json({
        userId:userId
    })
});
app.post("/todos", auth,async function (req, res) {
    const userId=req.userId;
    const users=await TodoModel.find({
        userId:userId
    })

    res.json({
        todos
    })
});
function auth(req,res,next){
    const token=req.headers.token;
    const decodeData=jwt.verify(token,JWT_SECRET);
    if(decodedData){
        req.userId=decodedData.id;
        next();
    }
    else{
        res.status(403).json({
            message:"incorrect credentials"
        })
    }
}   
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
