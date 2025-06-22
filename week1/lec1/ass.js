const user=[{
    name:"Prateek",
    age:18,
    gender:"Male"
},{
    name:"Prity",
    age:18,
    gender:"female"
},
{
    name:"ramadhir",
    age:48,
    gender:"Male"
}];

let arr=[];
function filtered(user){
for(let i =0;i<user.length;i++){
    if(user[i].age>18&&user[i].gender=="Male"){
        arr.push(user[i].name);
    }
}
return arr;
}
filtered(user);