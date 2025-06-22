const express=require("express");
const jwt=require("jsonwebtoken");

const JWT_SECRET="RadhaKrishna"

const app=express();
app.use(exprees.json());

let users=[];

app.post("/signup",function(req,res)
{
    const username=req.body.username
    const pass=req.body.pass
    users.push({
        username:username,
        pass:pass
    })
})

app.post("/signin",function(req,res)
{ 
    const username=req.body.username
    const pass=req.body.pass
    
    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(username===users[i].username&&pass===users[i].pass)
           foundUser=users[i]; 
    }
    if(foundUser){
            const token=jwt.sign({
                username
        },JWT_SECRET);
        res.json({
            token:token
        })
    }

})

app.get("/me",function(req,res)
{
    const token=req.headers.token;

    const decodedData=jwt.verify(token,JWT_SECRET);

    if(decodedData.username){
        let foundUser=null;

        for(let i=0;i<users.length;i++){
            if(users[i].username===username)
                    foundUser=users[i]
        }
        res.json({
            username=foundUser.username;
            pass=foundUser.pass
        })
    }
})

app.listen(3000);