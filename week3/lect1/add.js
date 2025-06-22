function Addkardo() {
    const val = document.getElementById("inp").value;
    const s = document.getElementById("store");
    const p = document.createElement("div");
    p.innerHTML = val;
    s.appendChild(p);
}
