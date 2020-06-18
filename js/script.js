const mapLink = document.querySelector(".maplink");
const writeUsLink = document.querySelector(".writeus-button");
const popupMap = document.querySelector(".modal-map");
const popupWriteUs = document.querySelector(".modal-writeus");
const closebutton = document.querySelectorAll(".button-close");

const s_del = document.getElementById("s_delivery");
const s_war = document.getElementById("s_warranty");
const s_cred = document.getElementById("s_credit");

const btn_del = document.getElementById("btn_del");
const btn_war = document.getElementById("btn_war");
const btn_cred = document.getElementById("btn_cred");

const dropdown_btn = document.getElementById("dropdown_btn");
const dropdown_menu = document.getElementById("dropdown_menu");


dropdown_btn.addEventListener('click', function(e) {
    e.preventDefault();

    dropdown_menu.classList.toggle("service-hide");
});

btn_del.addEventListener('click', function(e) {
    e.preventDefault();

    btn_del.classList.add("services-active");
    btn_war.classList.remove("services-active");
    btn_cred.classList.remove("services-active");

    s_del.classList.remove("service-hide");
    s_war.classList.add("service-hide");
    s_cred.classList.add("service-hide");
});

btn_war.addEventListener('click', function(e) {
    e.preventDefault();
    btn_war.classList.add("services-active");
    btn_del.classList.remove("services-active");
    btn_cred.classList.remove("services-active");

    s_del.classList.add("service-hide");
    s_war.classList.remove("service-hide");
    s_cred.classList.add("service-hide");
   
});

btn_cred.addEventListener('click', function(e) {
    e.preventDefault();

    btn_war.classList.remove("services-active");
    btn_del.classList.remove("services-active");
    btn_cred.classList.add("services-active");

    s_del.classList.add("service-hide");
    s_war.classList.add("service-hide");
    s_cred.classList.remove("service-hide");
});

closebutton.forEach((btn) => {

    btn.addEventListener('click', function(e) {
        e.preventDefault();
    
        popupWriteUs.classList.add("modal-close");
        popupMap.classList.add("modal-close");

    });
});

mapLink.addEventListener('click', function(e) {
    e.preventDefault();

    popupMap.classList.remove("modal-close");
});

writeUsLink.addEventListener('click', function(e) {
    e.preventDefault();

    popupWriteUs.classList.remove("modal-close");
});