document.addEventListener('keydown', function(event) {
if ( event.key.length == 1 ) {
 let paper = document.getElementById("paper");
 paper.innerHTML += event.key; 

} else if ( event.key == "Enter" ) {

 let paper = document.getElementById("paper");
 paper.innerHTML += "<br>";

} else if ( event.key == "Backspace" ) {
  let paper = document.getElementById("paper");
  let text = paper.innerHTML;
  text = text.substring(0,text.length-1);
  paper.innerHTML = text;
}
});



function a() {
  document.getElementById("otpt").innerHTML += "a";
}
if (caps) {
document.getElementById("otpt").innerHTML += "A";
}

function e() {
document.getElementById("otpt").innerHTML += "e";
}

function i() {
document.getElementById("otpt").innerHTML += "i";
}

function o() {
document.getElementById("otpt").innerHTML += "o";
}

function u() {
document.getElementById("otpt").innerHTML += "u";
}

function g() {
document.getElementById("otpt").innerHTML += "g";
}

function h() {
document.getElementById("otpt").innerHTML += "h";
}

function t() {
document.getElementById("otpt").innerHTML += "t";
}

function s() {
document.getElementById("otpt").innerHTML += "s";
}

function bksp() {
  let otpt = document.getElementById("otpt");
  let text = otpt.innerHTML;
  text = text.substring(0,text.length-1);
  otpt.innerHTML = text;
} 

var caps = false;

function caps() {
}
if (caps) {
caps = false;
} else {
caps = true;
}
