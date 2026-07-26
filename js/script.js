const slides = [
"images/banner1.jpg",
"images/banner2.jpg",
"images/banner3.jpg"
];

let current = 0;

const sliderImage = document.querySelector(".slide img");

setInterval(() => {

current++;

if(current >= slides.length){
current = 0;
}

sliderImage.src = slides[current];

},3000);
