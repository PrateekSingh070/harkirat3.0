const express= require("express");
const app=express();
 

app.use(express.json());

const users =[];

// ✅ Token generator
function generateToken(){
    let token="";
    for(let i=0;i<32;i++){
        let ascii = Math.floor(Math.random() * (122 - 48 + 1)) + 48;;
    let char = String.fromCharCode(ascii);
    token+=char;
    }
    return token;
}
app.post("/singup",function(req,res){
 
        const username= req.body.username;
        const pass =req.body.pass;
        const token=generateToken();
        users.push({
            username:username,
            pass:pass,
            token:token
                })

        res.json("you are signed in")
})
app.post("/singin", function (req, res) {
  const username = req.body.username;
  const pass = req.body.pass;

  // 1. Use find() just to locate the matching user (but don't send a response here)
  const user = users.find(function (u) {
    return u.username === username && u.pass === pass;
  });

  // 2. After find() returns, check result and send exactly one response
  if (user) {
    // `user.token` is the token you generated & stored at signup
    return res.json({ token: user.token });
  } else {
    return res
      .status(403)
      .json({ message: "Invalid username or password" });
  }
});

app.get("/me", function(req,res){
  const token=req.headers.token;
  let  foudUser=null;

  for(let i=0;i<user.length; i++){
    if(user[i].token==token){
      foundUser=users[i]
    }
  }
})

app.listen(3000);