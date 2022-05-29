const landingImgSrc = [
    "../images/landing/landing_01.jpg",
    "../images/landing/landing_02.jpg",
    "../images/landing/landing_03.jpg",
    "../images/landing/landing_04.jpg",
    "../images/landing/landing_05.jpg"
]
const landingCarousel = document.querySelector('#landingCarousel');
let i = 1;
setInterval(() => {
    landingCarousel.classList.add('carousel-transition');
    setTimeout(() => {
        landingCarousel.style.backgroundImage = `url(${landingImgSrc[i]})`;
    }, 500);
    setTimeout(() => {
        landingCarousel.classList.remove('carousel-transition');
    }, 1000);
    i === (landingImgSrc.length-1) ? i = 0 : i++;
}, 3500);