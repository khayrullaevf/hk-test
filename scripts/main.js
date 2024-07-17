const hamburger = document.getElementById('hamburger-toggle__btn');
const navItem = document.getElementById('header-hamburger');

const hamburgerMenu=document.getElementById('hamburger-menu')


// hamburger.addEventListener('click', () => {
//     navItem.classList.toggle('show');
// })


const toggleHamburgerOpenBtn=document.getElementById('open-hamburger')
const toggleHamburgerCloseBtn=document.getElementById('close-hamburger')

toggleHamburgerOpenBtn.addEventListener('click',(e)=>{
    console.log(e.target);
    hamburgerMenu.style.visibility='visible'
  
})
toggleHamburgerCloseBtn.addEventListener('click',(e)=>{
    console.log(e.target);
    hamburgerMenu.style.visibility='hidden'
  
})



//Member Slider
let currentIndex = 0;
function moveSlide(direction) {
    const slides = document.querySelector('.member__slider');
    const totalSlides = document.querySelectorAll('.member__slide').length;
    const itemsPerView = window.innerWidth <= 768 ? 1 : 4; // 1 item on mobile, 4 on desktop
    const maxIndex = totalSlides - itemsPerView; // Maximum index we can move to

    currentIndex += direction;

    // Keep the currentIndex within bounds
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }
    const offset = currentIndex * (100 / itemsPerView); // Calculate offset based on items per view
    slides.style.transform = `translateX(${-offset}%)`;
}


