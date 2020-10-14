let x = new XMLHttpRequest();
x.open("GET", "https://api.ipify.org?format=json", false);
let res = "";
x.onload = function(){
    console.log("res");
    res = this.responseText;
}
x.send();


let json = JSON.parse(res);
let ip = json["ip"];
let oof = document.createElement("h1");
oof.appendChild(document.createTextNode(ip));
document.querySelector("body").appendChild(oof);
