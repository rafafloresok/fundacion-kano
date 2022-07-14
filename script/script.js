/* LANDING CAROUSEL */
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
    }, 1500);
    i === (landingImgSrc.length-1) ? i = 0 : i++;
}, 3500);

/* NAVBAR TOGGLE */
const navToggleBtn = document.querySelector('#nav-toggle')
const navBar = document.querySelector('#navbar')
const navBarItems = document.querySelectorAll('.navbar__item')
navToggleBtn.addEventListener('click', () => navBar.classList.toggle('navbar--visible'))
navBarItems.forEach(item => item.addEventListener('click', () => navBar.classList.toggle('navbar--visible')))