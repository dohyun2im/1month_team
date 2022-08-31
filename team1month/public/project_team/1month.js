function imgmodal( num , clicknum ){
	document.querySelector('#btnmodal').click() // 모달 실행 
	
	// 모든 세션들 호출 [ 인수로 들어온 번호의 해당하는 세션 ]
	let section =  document.querySelectorAll('section')[num-1]
	// 해당 세션에서 대표이미지 2개 
	let fimenames = section.querySelectorAll('.imgbox > img');
	// 해당 세션에서 이미지 4개 
	let fimenames2 = section.querySelectorAll('.imgbox2 > img');
	
	let path = [ ] // 이미지들의 경로를 저장하는 배열 
	
	for( let i = 0 ; i<fimenames.length ; i++ ){ // 대표 이미지만큼 반복문 이용한 경로를 추출 -> 배열에 담기 
		path.push( fimenames[i].src );
	}
	for( let i = 0 ; i<fimenames2.length ; i++ ){ //  // 이미지만큼 반복문 이용한 경로를 추출 -> 배열에 담기 
		path.push( fimenames2[i].src );
	}
	
	let carouselinner = document.querySelector('.carousel-inner'); // 모달 내용 div
	
	let output = '' 
	// 배열내 이미지 경로만큼 반복문을 이용한 이미지슬라이드(캐러셀) div 생성 
	for( let i = 0 ; i<path.length; i++ ){
		if( clicknum == i ){
			output += '<div class="carousel-item active">';
		}else{
			output += '<div class="carousel-item">';
		}
		output +=
			'<img src="'+path[i]+'" class="d-block w-100" alt="..." >'+
		'</div>';
	}
	carouselinner.innerHTML = output
	
	}


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
let img10 = document.querySelector("#back1")



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
