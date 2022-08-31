let header = document.querySelector("header").offsetTop;
let sec1 = document.querySelector(".one").offsetTop;
let sec2 = document.querySelector(".two").offsetTop;
let sec3 = document.querySelector(".three").offsetTop;
let sec4 = document.querySelector(".four").offsetTop;
let sec5 = document.querySelector(".five").offsetTop;
let sec6 = document.querySelector(".six").offsetTop;
let sec7 = document.querySelector(".seven").offsetTop;
let sec8 = document.querySelector(".eight").offsetTop;

let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")
let img3 = document.querySelector("#img3")
let img4 = document.querySelector("#img4")
let img5 = document.querySelector("#img5")
let img6 = document.querySelector("#img6")
let img7 = document.querySelector("#img7")
let img8 = document.querySelector("#img8")
let img9 = document.querySelector("#main")
let img10 = document.querySelector("#back")

img1.addEventListener('click' , () =>{
	window.scrollTo({top:sec1, behavior:'smooth'});
	img1.style.borderColor = "#8e7055";
})

img2.addEventListener('click' , () =>{
	window.scrollTo({top:sec2, behavior:'smooth'});
	img2.style.borderColor = "#8e7055";
})

img3.addEventListener('click' , () =>{
	window.scrollTo({top:sec3, behavior:'smooth'});
	img3.style.borderColor = "#8e7055";
})

img4.addEventListener('click' , () =>{
	window.scrollTo({top:sec4, behavior:'smooth'});
	img4.style.borderColor = "#8e7055";
})

img5.addEventListener('click' , () =>{
	window.scrollTo({top:sec5, behavior:'smooth'});
	img5.style.borderColor = "#8e7055";
})

img6.addEventListener('click' , () =>{
	window.scrollTo({top:sec6, behavior:'smooth'});
	img6.style.borderColor = "#8e7055";
})

img7.addEventListener('click' , () =>{
	window.scrollTo({top:sec7, behavior:'smooth'});
	img7.style.borderColor = "#8e7055";
})

img8.addEventListener('click' , () =>{
	window.scrollTo({top:sec8, behavior:'smooth'});
	img8.style.borderColor = "#8e7055";
})

img10.addEventListener('click' , () =>{
	window.scrollTo({top:header, behavior:'smooth'});
	img9.style.color = "#8e7055";
})
