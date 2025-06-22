const todos=[{id:1,
    descrp:"i am the best"
},
{id:2,
    descrp:"i am the best developer"
},
{id:3,
    descrp:"i am the best coder"
},
{id:4,
    descrp:"i am the best logic builder"
},
{id:5,
    descrp:"i am best at everything"
},
];
let c=-1node;
function Addkardo(todos){
    c++;
    const div=document.createElement("div");
    const h1=document.createElement("h1");
    const button=document.createElement("button");
    button.innerText="Delete";
    h1.innerText=todos[c].descrp;
    div.appendChild(h1);
    div.appendChild(button);
    document.body.appendChild(div);
    button.addEventListener("click",()=>{
        div.remove();
    })
}