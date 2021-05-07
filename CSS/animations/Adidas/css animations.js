//Movement animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h4");
const sizes = document.querySelector(".sizes");

//Moving .nim

container.addEventListener("mousemove",(e)=>{

	let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
	let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
	card.style.transform = "rotateY(" + xAxis + "deg) rotateX("+yAxis+"deg)";

});

//Animate In
container.addEventListener("mouseenter", e => {
	card.style.transition = "all 0.2s linear";
	sizes.style.transform = "translateZ(70px)";
	title.style.transform = "translateZ(100px)";
	sneaker.style.transform = "translateZ(100px) rotateZ(-60deg)";
	purchase.style.transform = "translateZ(70px)";
	description.style.transform = "translateZ(75px)";
	
});


//AnimateOut
container.addEventListener("mouseleave",e =>{
	card.style.transition= "all 0.5s ease";
	sizes.style.transform = "translateZ(0px)";
	title.style.transform = "translateZ(0px)";
	sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
	purchase.style.transform = "translateZ(0px)";
	description.style.transform = "translateZ(0px)";
	card.style.transform = "rotateY(0deg) rotateX(0deg)";

});

