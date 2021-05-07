const cont = document.querySelector(".container");
const b1 = document.querySelector(".book1");
const b2 = document.querySelector(".book2");
const b3 = document.querySelector(".book3");
const b4 = document.querySelector(".book4");
const b5 = document.querySelector(".book5");

cont.addEventListener("mouseover",e=>{
    cont.style.transform = "rotateZ(-35deg)";
    b1.style.transform = "rotateZ(-30deg)";
    b3.style.transform = "rotateZ(30deg)";
    b4.style.transform = "rotateZ(60deg)";
    b5.style.transform = "rotateZ(90deg)";
});
cont.addEventListener("mouseleave",e=>{
    cont.style.transform = "rotateZ(0deg)";
    b1.style.transform = "rotateZ(0deg) translateX(0px) translateY(0px)";
    b3.style.transform = "rotateZ(0deg)";
    b4.style.transform = "rotateZ(0deg)";
    b5.style.transform = "rotateZ(0deg)";
});