const navHeader = document.querySelector('.nav_header')
const burger = document.querySelector('.burger')

function clickBurger() {
    navHeader.classList.toggle('nav_header_active')
    burger.classList.toggle('burger_active')
}

burger.addEventListener('click', clickBurger) 