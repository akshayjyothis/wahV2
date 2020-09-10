//jshint esversion:6
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-items');
    const hide = document.querySelector('.right-panel');
    const leftpanel = document.querySelector('.left-panel');
    const section = document.querySelector('.section');
    const body = document.querySelector('body');


    burger.addEventListener("click" , () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
        hide.classList.toggle("active");
        body.classList.toggle("mob-view");
        leftpanel.classList.toggle("position");
    });
};

navSlide();