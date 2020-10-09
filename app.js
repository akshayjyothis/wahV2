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

const hour = document.querySelector('.SubSemi-G');

var today = new Date()
var timeHour = today.getHours();
var timeMin = today.getMinutes();

// var timeHour = 7;
// var timeMin = 29;
// console.log(timeHour);
// console.log(timeMin);

if (timeHour >= 8 && timeHour <=21){
    hour.innerHTML = "You can call us now.";
}

else if (timeHour >=7 && timeHour <= 8){
    if(timeMin >=30 ){
        hour.innerHTML = "You can call us now.";
    }   
    else{
        hour.innerHTML = "Call us between 7.30am - 10.30pm";
    } 
}

else if (timeHour >=21 && timeHour <= 22){
    if(timeMin >=30 ){
        hour.innerHTML = "You can call us now.";
    }
    else{
        hour.innerHTML = "Call us between 7.30am - 10.30pm";
    }
}

else{
    hour.innerHTML = "Call us between 7.30am - 10.30pm";
}