const rad = document.querySelector(".btn1");
const deg = document.querySelector(".btn2");
const fact = document.querySelector(".btn3");
const openbracket = document.querySelector(".btn4");
const closebracket = document.querySelector(".btn5");
const percent = document.querySelector(".btn6");
const AC = document.querySelector(".btn7");
const inv = document.querySelector(".btn8");
const sin = document.querySelector(".btn9");
const ln = document.querySelector(".btn10");
const num7 = document.querySelector(".btn11");
const num8 = document.querySelector(".btn12");
const num9 = document.querySelector(".btn13");
const divide = document.querySelector(".btn14");
const pi = document.querySelector(".btn15");
const cos = document.querySelector(".btn16");
const log = document.querySelector(".btn17");
const num4 = document.querySelector(".btn18");
const num5 = document.querySelector(".btn19");
const num6 = document.querySelector(".btn20");
const multiple = document.querySelector(".btn21");
const e = document.querySelector(".btn22");
const tan = document.querySelector(".btn23");
const root = document.querySelector(".btn24");
const num1 = document.querySelector(".btn25");
const num2 = document.querySelector(".btn26");
const num3 = document.querySelector(".btn27");
const minus = document.querySelector(".btn28");
const ans = document.querySelector(".btn29");
const exp = document.querySelector(".btn30");
const xpowy = document.querySelector(".btn31");
const num0 = document.querySelector(".btn32");
const dot = document.querySelector(".btn33");
const equal = document.querySelector(".btn34");
const plus = document.querySelector(".btn35");
const box = document.querySelector("#textarea");

num1.addEventListener("click",e=>{
    box.textContent+="1"; 
});
num2.addEventListener("click",e=>{
    box.textContent+="2"; 
});
num3.addEventListener("click",e=>{
    box.textContent+="3"; 
});
num4.addEventListener("click",e=>{
    box.textContent+="4"; 
});
num5.addEventListener("click",e=>{
    box.textContent+="5"; 
});
num6.addEventListener("click",e=>{
    box.textContent+="6"; 
});
num7.addEventListener("click",e=>{
    box.textContent+="7"; 
});
num8.addEventListener("click",e=>{
    box.textContent+="8"; 
});
num9.addEventListener("click",e=>{
    box.textContent+="9"; 
});
num0.addEventListener("click",e=>{
    box.textContent+="0"; 
});
AC.addEventListener("click",e=>{
    box.textContent = box.value.slice(0, -1); 
});
divide.addEventListener("click",e=>{
    box.innerHTML+="&#xf7;"
});

multiple.addEventListener("click",e=>{
    box.innerHTML+="&#xd7;"
});

plus.addEventListener("click",e=>{
    box.textContent+="+"; 
});

minus.addEventListener("click",e=>{
    box.textContent+="-"; 
});
dot.addEventListener("click",e=>{
    box.textContent+="."; 
});
cos.addEventListener("click",e=>{
    box.textContent+="cos"; 
});
sin.addEventListener("click",e=>{
    box.textContent+="sin"; 
});
tan.addEventListener("click",e=>{
    box.textContent+="tan"; 
});
pi.addEventListener("click",e=>{
    box.innerHTML+="&pi;"; 
});
log.addEventListener("click",e=>{
    box.textContent+="log"; 
});
ln.addEventListener("click",e=>{
    box.textContent+="ln"; 
});
root.addEventListener("click",e=>{
    box.innerHTML+="&#x221A;"; 
});

openbracket.addEventListener("click",e=>{
    box.textContent+="("; 
});
closebracket.addEventListener("click",e=>{
    box.textContent+=")"; 
});