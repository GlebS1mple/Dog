/*Header */
const Burger = document.querySelector(".header__burgerimg");
const menu = document.querySelector(".header__burgermenu");
const close = document.querySelector(".header__close");
const body = document.querySelector("body");
const header = document.querySelector("header");
const mobile = document.querySelector(".mobile");
const catalog = document.querySelector(".header__catalog");
const rightArrow = document.querySelector(".right");
const catalogReturn = document.querySelector(".header__catalogleft");
const good = document.querySelector(".good");
const goods = document.querySelector(".header__goods");
const goodsReturn = document.querySelector(".header__goodsleft");
const like = document.querySelector(".hits__like");


Burger.addEventListener("click", function () {
    body.classList.toggle("lock");
    menu.classList.toggle("active");
    Burger.classList.toggle("active");
});

close.addEventListener("click", function () {
    body.classList.toggle("lock");
    menu.classList.toggle("active");
    Burger.classList.toggle("active");
});

rightArrow.addEventListener("click", function () {
    catalog.classList.toggle("active");
});
catalogReturn.addEventListener("click", function () {
    catalog.classList.toggle("active");
});

good.addEventListener("click", function () {
    goods.classList.toggle("active");
});
goodsReturn.addEventListener("click", function () {
    goods.classList.toggle("active");
});

/*POPUP*/

const popupMain = document.querySelector(".popup");
const profile = document.querySelector(".header__links.profile");
const closePopup = document.querySelector(".popup__close");
const login = document.querySelector(".popup__login");
const password = document.querySelector(".popup__password");
const profileAdopt = document.querySelector(".header__profileadopt");
const profileMobile = document.querySelector(".mobile__link.profilepage");

console.log(profileMobile)

window.onload = function () {
    profileMobile.addEventListener("click", function () {
        popupMain.classList.add("popup__active");
    })
    profileAdopt.addEventListener("click", function () {
        popupMain.classList.add("popup__active");
    })
    profile.addEventListener("click", function () {
        popupMain.classList.add("popup__active");
    })
    closePopup.addEventListener("click", function () {
        popupMain.classList.remove("popup__active");
        if (password.classList.contains("popup__passwordactive")) {
            password.classList.remove("popup__passwordactive");
        }
        if (login.classList.contains("popup__loginactive")) {
            login.classList.remove("popup__loginactive");
        }
    })
    login.addEventListener("click", function () {
        login.classList.add("popup__loginactive");
        if (password.classList.contains("popup__passwordactive")) {
            password.classList.remove("popup__passwordactive");
        }
    })
    password.addEventListener("click", function () {
        if (login.classList.contains("popup__loginactive")) {
            login.classList.remove("popup__loginactive");
        }
        password.classList.add("popup__passwordactive");
    })
    document.addEventListener("click", actions)
    function actions(e) {
        const targetElement = e.target;
        if (!targetElement.closest(".popup__main") && !targetElement.closest(".header__links.profile") && !targetElement.closest(".header__profileadopt") && !targetElement.closest(".mobile__link.profilepage")) {
            popupMain.classList.remove("popup__active");
            if (password.classList.contains("popup__passwordactive")) {
                password.classList.remove("popup__passwordactive");
            }
            if (login.classList.contains("popup__loginactive")) {
                login.classList.remove("popup__loginactive");
            }
        }
    }
}



/*MOBILE-MENU*/

const mainPage = document.querySelector(".mainpage");
const catalogPage = document.querySelector(".catalogpage");
const basketPage = document.querySelector(".basketpage");
const favPage = document.querySelector(".favpage");
const profilePage = document.querySelector(".profilepage");
const mainPageImage = document.querySelector(".mainpage-image");
const catalogPageImage = document.querySelector(".catalogpage-image");
const basketPageImage = document.querySelector(".basketpage-image");
const favPageImage = document.querySelector(".favpage-image");
const profilePageImage = document.querySelector(".profilepage-image");



window.addEventListener('scroll', function () {
    const scrolled = this.pageYOffset;
    const headerHeight = header.offsetHeight;

    if (scrolled > headerHeight) {
        mobile.classList.add("active");
    }
    else {
        mobile.classList.remove("active");
    }
})
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper .next',
        prevEl: '.swiper .prev',
    },
    spaceBetween: 10,
    slidesPerView: 4,
    slideToClickedSlide: true,
    watchOverflow: true,
    breakpoints: {
        0: {
            slidesPerView: 1.7,
        },
        650: {
            slidesPerView: 2.3,
        },
        767: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
    }
});
const swiperArticleNews = new Swiper('.swiper.swiper-news-sub', {
    navigation: {
        nextEl: '.swiper .next',
        prevEl: '.swiper .prev',
    },
    spaceBetween: 10,
    slideToClickedSlide: true,
    watchOverflow: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 1.7,
        },
        650: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2.7,
        },
        992: {
            slidesPerView: 3,
        },
    }
});