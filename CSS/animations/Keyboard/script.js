const q = document.querySelector("#q");

const w = document.querySelector("#w");
const t = document.querySelector("#t");
const y = document.querySelector("#y");
const u = document.querySelector("#u");
const i = document.querySelector("#i");
const o = document.querySelector("#o");
const p = document.querySelector("#p");
const l = document.querySelector("#l");
const k = document.querySelector("#k");
const j = document.querySelector("#j");
const h = document.querySelector("#h");
const g = document.querySelector("#g");
const f = document.querySelector("#f");
const d = document.querySelector("#d");
const s = document.querySelector("#s");
const a = document.querySelector("#a");
const z = document.querySelector("#z");
const x = document.querySelector("#x");
const c = document.querySelector("#c");
const v = document.querySelector("#v");
const b = document.querySelector("#b");
const n = document.querySelector("#n");
const m = document.querySelector("#m");
const r = document.querySelector("#r");
const e = document.querySelector("#e");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");
const num5 = document.querySelector("#num5");
const num6 = document.querySelector("#num6");
const num7 = document.querySelector("#num7");
const num8 = document.querySelector("#num8");
const num9 = document.querySelector("#num9");
const num0 = document.querySelector("#num0");
const rnum1 = document.querySelector(".row5 #num1");
const rnum2 = document.querySelector(" .row5 #num2");
const rnum3 = document.querySelector(".row5 #num3");
const rnum4 = document.querySelector(".row4 #num4");
const rnum5 = document.querySelector(".row4 #num5");
const rnum6 = document.querySelector(".row4 #num6");
const rnum7 = document.querySelector(".row3 #num7");
const rnum8 = document.querySelector(".row3 #num8");
const rnum9 = document.querySelector(".row3 #num9");
const rnum0 = document.querySelector(".row6 #num0");
const rdot = document.querySelector(".row6 #dot");
const dot = document.querySelector("#dot");
const comma = document.querySelector("#comma");
const plus = document.querySelector(".row3 #plus");
const fslash = document.querySelector("#fslash");
const rfslash = document.querySelector("#slash");
const minus = document.querySelector("#minus");
const hypen = document.querySelector("#hypen");
const star = document.querySelector("#star");
const space = document.querySelector("#space");
const tab = document.querySelector("#tab");
const box = document.getElementById("textarea");
const capslock = document.querySelector("#capslock");
var caps = false;
capslock.addEventListener("click",e=>{
    if (caps) {
        caps = false;
    }
    else{
        caps = true;
    }
});
tab.addEventListener("click",e=>{
    
    
    box.textContent+=" "
    box.textContent+="s";
    box.textContent = box.value.substring(0, box.value.length - 1);
    box.textContent+=" ";
    box.textContent+="f";
    box.textContent = box.value.substring(0, box.value.length - 1);
    box.textContent+=" ";
    box.textContent+="u";
    box.textContent = box.value.substring(0, box.value.length - 1);
    box.textContent+=" ";
    box.textContent+="u";
    box.textContent = box.value.substring(0, box.value.length - 1);
    
     
});
space.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += " ";
     
});
star.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "*";
     
});
minus.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "-";
     
});
hypen.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "-";
     
});
q.addEventListener("click",e=>{
    if (caps){
        document.getElementById("textarea").textContent += "Q";
    }
    else{
        document.getElementById("textarea").textContent += "q";
    }
    

     
});
w.addEventListener("click",e=>{
    if (caps){
        document.getElementById("textarea").textContent += "W";
    }
    else{
        document.getElementById("textarea").textContent += "w";
    }
     
});

e.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "E";
    }
    else{
        document.getElementById("textarea").textContent += "e";
    }
     
});
r.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "R";
    }
    else{
        document.getElementById("textarea").textContent += "r";
    }
     
});
t.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "T";
    }
    else{
        document.getElementById("textarea").textContent += "t";
    }
     
});
y.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "Y";
    }
    else{
        document.getElementById("textarea").textContent += "y";
    }
     
});
i.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "I";
    }
    else{
        document.getElementById("textarea").textContent += "i";
    }
     
});
u.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "U";
    }
    else{
        document.getElementById("textarea").textContent += "u";
    }
     
});
o.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "O";
    }
    else{
        document.getElementById("textarea").textContent += "o";
    }
     
});
p.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "P";
    }
    else{
        document.getElementById("textarea").textContent += "p";
    }
     
});
l.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "L";
    }
    else{
        document.getElementById("textarea").textContent += "l";
    }
     
});
k.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "K";
    }
    else{
        document.getElementById("textarea").textContent += "k";
    }
     
});
j.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "J";
    }
    else{
        document.getElementById("textarea").textContent += "j";
    }
     
});
h.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "H";
    }
    else{
        document.getElementById("textarea").textContent += "h";
    }
     
});
g.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "G";
    }
    else{
        document.getElementById("textarea").textContent += "g";
    }
     
});
f.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "F";
    }
    else{
        document.getElementById("textarea").textContent += "f";
    }
     
});
d.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "D";
    }
    else{
        document.getElementById("textarea").textContent += "d";
    }
     
});
s.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "S";
    }
    else{
        document.getElementById("textarea").textContent += "s";
    }
     
});
a.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "A";
    }
    else{
        document.getElementById("textarea").textContent += "a";
    }
     
});
m.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "M";
    }
    else{
        document.getElementById("textarea").textContent += "m";
    }
     
});
n.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "N";
    }
    else{
        document.getElementById("textarea").textContent += "n";
    }
     
});
b.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "B";
    }
    else{
        document.getElementById("textarea").textContent += "b";
    }
     
});
v.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "v";
    }
    else{
        document.getElementById("textarea").textContent += "v";
    }
     
});
c.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "C";
    }
    else{
        document.getElementById("textarea").textContent += "c";
    }
     
});
x.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "X";
    }
    else{
        document.getElementById("textarea").textContent += "x";
    }
     
});
z.addEventListener("click",e=>{
    
    if(caps){
        document.getElementById("textarea").textContent += "Z";
    }
    else{
        document.getElementById("textarea").textContent += "z";
    }
     
});
document.querySelector("#fbtn").addEventListener("click",e=>{
    box.textContent+="`";
});
document.querySelector("#backspace").addEventListener("click", e=>{
    
    document.getElementById("textarea").textContent= document.getElementById("textarea").value.substring(0, document.getElementById("textarea").value.length - 1);
});
num8.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "8";
     
});
num9.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "9";
     
});
num7.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "7";
     
});
num6.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "6";
     
});
num5.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "5";
     
});
num4.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "4";
     
});
num3.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "3";
     
});
num2.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "2";
     
});
num1.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "1";
     
});
num0.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "0";
     
});
rnum8.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "8";
     
});
rnum9.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "9";
     
});
rnum7.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "7";
     
});
rnum6.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "6";
     
});
rnum5.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "5";
     
});
rnum4.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "4";
     
});
rnum3.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "3";
     
});
rnum2.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "2";
     
});
rnum1.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "1";
     
});
rnum0.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "0";
     
});
dot.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += ".";
     
});
rdot.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += ".";
     
});
comma.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += ",";
     
});
plus.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "+";
     
});
fslash.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "/";
     
});
rfslash.addEventListener("click",e=>{
    
    document.getElementById("textarea").textContent += "/";
     
});
