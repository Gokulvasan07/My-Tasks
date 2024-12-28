// Header content
const parent = document.createElement("header");
parent.innerText = "MY DOM WEB";
document.body.appendChild(parent);
parent.style.textAlign = "center";
parent.style.backgroundColor = "#4c3c3c";
parent.style.height = "15vh";
parent.style.color = "white";
parent.style.border = "1px solid black";
parent.style.position = "absolute";
parent.style.top = "0px";
parent.style.left = "0px";
parent.style.width = "100%";
parent.style.fontSize = "20px";

// Nav content
const mynav = document.createElement("nav");
// mynav.innerText = "Navigation";
document.body.appendChild(mynav);
const span1=document.createElement("span");
span1.innerText="Home      Contact      About        Register       Login";
mynav.appendChild(span1);
span1.style.color="white";
span1.style.wordSpacing="40px";
// const span2=document.createElement("span");
// span2.innerText="Contact";
// mynav.appendChild(span2);
span1.style.color="white";
mynav.style.textAlign = "center";
mynav.style.backgroundColor = "#333";
mynav.style.color = "white";
mynav.style.height = "10vh";
mynav.style.border = "1px solid black";
mynav.style.position = "absolute";
mynav.style.top = "15vh";
mynav.style.left = "0px";
mynav.style.width = "100%";
mynav.style.fontSize = "18px";

// Page content
const mycon = document.createElement("div");
document.body.appendChild(mycon);
const div1 = document.createElement("div");
const div2 = document.createElement("div");

mycon.appendChild(div1);
mycon.appendChild(div2);
mycon.style.display = "flex";
mycon.style.justifyContent = "space-around";
mycon.style.padding = "10px";
mycon.style.gap = "20px";
mycon.style.width = "calc(100% - 40px)";
mycon.style.marginTop = "25vh";

div1.style.backgroundImage = "url('Nature.jpg')";
div1.style.backgroundSize = "cover";
div1.style.backgroundColor = "lightgray";
div1.style.height = "50vh";
div1.style.width = "300px";
div1.style.margin = "10px";

div2.style.backgroundColor = "lightgray";
div2.style.height = "50vh";
div2.style.width = "300px";
div2.style.margin = "10px";

// Add video to div2
const video = document.createElement("video");
video.src = "MyVid.mp4";
video.controls = true;
video.style.width = "100%";
video.style.height = "100%";
div2.appendChild(video);

// Footer content
const foot = document.createElement("footer");
document.body.appendChild(foot);
foot.innerText = "Contact as";
foot.style.backgroundColor = "#4c3c3c";
foot.style.color = "white";
foot.style.textAlign = "center";
foot.style.height = "10vh";
foot.style.position = "absolute";
foot.style.bottom = "0px";
foot.style.left = "0px";
foot.style.width = "100%";
foot.style.borderTop = "1px solid black";
