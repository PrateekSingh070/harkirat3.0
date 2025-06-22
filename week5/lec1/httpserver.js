const express=require("express");

const app=express();

app.get("/sum",function(req,res){

    const a=req.query.a;//taking input a from user
    const b=req.query.b;

    res.json({
        answer:parseInt(a)+parseInt(b)
    })

})
app.get("/multiply",function(req,res){

})

app.listen(3000);