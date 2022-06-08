const Burger = document.querySelector(".header__burgerimg");
const menu = document.querySelector(".header__burgermenu");
const close = document.querySelector(".header__close");
const body = document.querySelector("body");
const header = document.querySelector("header");
const mobile = document.querySelectorAll(".mobile");
const catalog = document.querySelector(".header__catalog");
const rightArrow = document.querySelector(".right");
const catalogReturn = document.querySelector(".header__catalogleft");
const good = document.querySelector(".good");
const goods = document.querySelector(".header__goods");
const goodsReturn = document.querySelector(".header__goodsleft");
const like = document.querySelectorAll(".hits__likesrc");

like.forEach(onLike)

function onLike(item) {
    item.addEventListener("click", function () {
        item.classList.toggle("hits__likesrcactive")
    })
}
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
        mobile.forEach(mobileAdd);
        function mobileAdd(item) {
            item.classList.add("active");
        }
    }
    else {
        mobile.forEach(mobileRemove);
        function mobileRemove(item) {
            item.classList.remove("active");
        }
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


const swiperWatched = new Swiper('.swiper.watched', {
    navigation: {
        nextEl: '.swiper .next',
        prevEl: '.swiper .prev',
    },
    spaceBetween: 10,
    slideToClickedSlide: false,
    watchOverflow: true,
    slidesPerView: 5,
    slidesPerGroup: 1,
    breakpoints: {
        0: {
            slidesPerView: 2.7,
        },
        650: {
            slidesPerView: 3.3,
        },
        767: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
    }
});
/*TABS MOBILE*/

const tabsBtn = document.querySelectorAll(".banner2__minicircle");
const tabsItems = document.querySelectorAll(".banner2__block");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains("active")) {
            tabsBtn.forEach(function (item) {
                item.classList.remove("active")
            });

            tabsItems.forEach(function (item) {
                item.classList.remove("active");
            });

            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        }
    });
}

const tabsBtn2 = document.querySelectorAll(".banner3__minicircle");
const tabsItems2 = document.querySelectorAll(".banner3__block");

tabsBtn2.forEach(onTabClick2);

function onTabClick2(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains("active")) {
            tabsBtn2.forEach(function (item) {
                item.classList.remove("active")
            });

            tabsItems2.forEach(function (item) {
                item.classList.remove("active");
            });

            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        }
    });
}
/*Price buttons*/

const Add = document.querySelectorAll(".subhead__add");
const Remove = document.querySelectorAll(".subhead__remove");
const Values = document.querySelectorAll(".subhead__number");
let currentValue = 1;
let initial = document.querySelector(".subhead__initialprice").innerHTML;
let real = document.querySelector(".subhead__realprice").innerHTML;

Add.forEach(addProduct);
Remove.forEach(removeProduct);
function changeinitialPrice(initialprice) {
    initialprice.innerHTML = initial * currentValue;
}
function changerealPrice(realprice) {
    realprice.innerHTML = real * currentValue;
}

function changevalue(value) {
    value.innerHTML = currentValue;
}
function increment() {
    document.querySelector(".subhead__number").innerHTML = ++currentValue;
    Values.forEach(changevalue)
    let initialPrice = document.querySelectorAll(".subhead__initialprice");
    let realPrice = document.querySelectorAll(".subhead__realprice");
    initialPrice.forEach(changeinitialPrice);
    realPrice.forEach(changerealPrice);
}
function addProduct(btnAdd) {
    btnAdd.addEventListener("click", increment)
}
function decrement() {
    if (currentValue < 2) {
        return currentValue;
    } else
        document.querySelector(".subhead__number").innerHTML = --currentValue;
    Values.forEach(changevalue)
    let initialPrice = document.querySelectorAll(".subhead__initialprice");
    let realPrice = document.querySelectorAll(".subhead__realprice");
    initialPrice.forEach(changeinitialPrice);
    realPrice.forEach(changerealPrice);
}
function removeProduct(btnRemove) {
    btnRemove.addEventListener("click", decrement)
}


/* MODAL  */

const magnifer = document.querySelector(".discription__magnifier");
const modalWindow = document.querySelector(".discription__modal");
const modalClose = document.querySelector(".discription__modalclose");

console.log(modalWindow);

magnifer.addEventListener("click", openmodal);
modalClose.addEventListener("click", closemodal);


function openmodal(evt) {
    body.classList.add("lock");
    modalWindow.classList.add("active__modal");
}
function closemodal(evt) {
    body.classList.remove("lock");
    modalWindow.classList.remove("active__modal");

}


const swiperVerticle = new Swiper('.swiper.vertical-swiper', {
    navigation: {
        nextEl: '.swiper .next',
        prevEl: '.swiper .prev',
    },
    direction: 'vertical',
    spaceBetween: 20,
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

const swiperModal = new Swiper('.swiper.swiper-modal', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    slideToClickedSlide: true,
    watchOverflow: true,
    dots: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
    /*breakpoints: {
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
    }*/
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
