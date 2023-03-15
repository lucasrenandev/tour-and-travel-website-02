// Modo estrito
'use strict'

// Header
const header = document.getElementById("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0)
})

// Responsive menu
const menuIcon = document.getElementById("menu-icon")
const navBar = document.querySelector(".navbar")

menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active")
    menuIcon.classList.toggle("bx-x")
})

window.addEventListener("scroll", () => {
    navBar.classList.remove("active")
    menuIcon.classList.remove("bx-x")
})