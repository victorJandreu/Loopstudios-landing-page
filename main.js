const imgBurger = document.getElementById("open")
const imgX = document.getElementById("close")
const headerBtn = document.getElementById("header-btn")
const blackBackground = document.getElementById("black")
const fixedHeaderNav = document.getElementById("fixed")
const navHeader = document.getElementById("nav-header")

headerBtn.addEventListener("click", function(){
    imgX.classList.toggle("notShow")
    imgBurger.classList.toggle("notShow")
    blackBackground.classList.toggle("black")
    fixedHeaderNav.classList.toggle("fixed")
    navHeader.classList.toggle("show")
})