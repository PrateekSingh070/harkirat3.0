// const el=document.querySelectorAll("h2")[0].innerHTML=2;


function deletekaro(val){
    const el=document.getElementById(val);
    el.parentNode.removeChild(el);
}
const count=0;
function Addkardo(){
    count++;
    const val = document.getElementById("inp").value;
    const s = document.getElementById("store");
    const p = document.createElement("div");
    p.innerHTML = <div id="count">s</div><button onclick="deletekaro(count)">Delete</button>;
    s.appendChild(p);
}

