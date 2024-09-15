const sliderImages = document.querySelectorAll('.slider_img'),
    sliderLine = document.querySelector('.slider-line'),
    sliderDots = document.querySelectorAll('.big_dot'),
    sliderDotsColor = document.querySelectorAll('.slider_dot'),
    sliderBtnNext = document.querySelector('.slider_btn_next'),
    sliderBtnPrev = document.querySelector('.slider_btn_prev');


const one = 'First slide';
const two = 'Second slide';
const three = 'Third slide';
const four = 'Fourth';

let sliderCount = 0,
    sliderWidth;

window.addEventListener('resize', showSlide);

function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
    rollSlider();
}

showSlide();

function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) {
        sliderCount = 0;
    }
    rollSlider();
    thisSlide(sliderCount);
}

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) {
        sliderCount = sliderImages.length - 1;
    }
    rollSlider();
    thisSlide(sliderCount);
}

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active_dot'));
    sliderDots[index].classList.add('active_dot');
    sliderDotsColor.forEach(item => item.classList.remove('active_color'));
    sliderDotsColor[index].classList.add('active_color');

    if(index == 0) {
        document.querySelector('.slide_text').textContent = 'Frontend is the best!';
        document.querySelector('.slide_text').classList.add('text-animation');
        setTimeout(textAnimation, 1000);
    }
    if(index == 1) {
        document.querySelector('.slide_text').textContent = 'Javascript is cool!';
        document.querySelector('.slide_text').classList.add('text-animation');
        setTimeout(textAnimation, 1000);
    }
    if(index == 2) {
        document.querySelector('.slide_text').textContent = 'Index html is great!';
        document.querySelector('.slide_text').classList.add('text-animation');
        setTimeout(textAnimation, 1000);
    }
    if(index == 3) {
        document.querySelector('.slide_text').textContent = 'Css are beautiful!';
        document.querySelector('.slide_text').classList.add('text-animation');
        setTimeout(textAnimation, 1000);
    }
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})

function textAnimation () {
    document.querySelector('.slide_text').classList.remove('text-animation');
}