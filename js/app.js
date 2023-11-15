
// 

const allElem = Array.from(document.querySelectorAll('*'))
allElem.forEach((i) => {
    i.classList.add('reset')
})


const firstTitle = document.querySelector('h1')
firstTitle.classList.add('first-title')


const secondTitle = Array.from(document.querySelectorAll('h2'))
secondTitle.forEach((i) => {
    i.classList.add('second-title')
})


const thirdTitle = Array.from(document.querySelectorAll('h3'))
thirdTitle.forEach((i) => {
    i.classList.add('third-title')
})


const p = Array.from(document.querySelectorAll('p'))
p.forEach((i) => {
    i.classList.add('paragraph')
})


const btn = Array.from(document.querySelectorAll('button'))
btn.forEach((i) => {
    i.classList.add('button-reset')
})


const link = Array.from(document.querySelectorAll('a'))
link.forEach((i) => {
    i.classList.add('link-reset')
})


const list = Array.from(document.querySelectorAll('ul'))
list.forEach((i) => {
    i.classList.add('list-reset')
})


const section = Array.from(document.querySelectorAll('section'))
section.forEach((i) => {
    i.classList.add('padding-block')
})


const address = Array.from(document.querySelectorAll('address'))
address.forEach((i) => {
    i.classList.add('address-reset')
})


const body = document.querySelector('body')
body.classList.add('main-style')


// Burger

const burger = document.querySelector('.burger')
const burgerPos = document.querySelector('.header-bottom')
const burgerBtn = document.querySelector('.burger-btn')

let burgerActiveCount = 0;

burgerBtn.addEventListener('click', () => {
    burger.classList.toggle('burger-active')
    if (burgerActiveCount!=1) {
        burgerPos.classList.toggle('burger-active-position')
        burgerActiveCount++
    }else {
        
    }
})


resizeFunction = () => {
    if (window.innerWidth<=560) {
        // Services slider
        const servicesSwiper = new Swiper('.services-slider',{
            slidesPerView: 1.4,
            spaceBetween: 24,
            autoHeight: true,
        })
    }

    // Burger fix
    if (burger.classList.contains('burger-active') != true) {
        burgerActiveCount = 0;
        burgerPos.classList.remove('burger-active-position')
    }

}

window.onresize = resizeFunction


// Team slider

const teamSlider = new Swiper('.team-swiper', {
    slidesPerView: 4,
    spaceBetween: 24,
    autoHeight: true,
    breakpoints: {
        310: {
            slidesPerView: 1.15,
            spaceBetween: 24,
        },
        932: {
            slidesPerView: 2.5,

        },
        1289: {
            slidesPerView: 4,

        }
    }
})


// Reviews slider

const reviewsSlider = new Swiper('.reviews-slider .swiper', {
    spaceBetween: 24,
    autoHeight: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        750: {
            slidesPerView: 1.3,

        },
        1289: {
            slidesPerView: 2,
        }
    },

      // Navigation arrows
    navigation: {
        nextEl: '.reviews-slider-next',
        prevEl: '.reviews-slider-prev',
    },
})


// Materials slider

const materialsSlider = new Swiper('.materials-slider .swiper', {
    spaceBetween: 24,
    autoHeight: true,
    breakpoints: {
        320: {
            slidesPerView: 1.2,
        },
        770: {
            slidesPerView: 2.2,
        },
        1295: {
            slidesPerView: 3,
        }
    },
})