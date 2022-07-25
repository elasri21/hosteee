const openMenu = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");
const contacts = document.querySelector(".contacts");
openMenu.addEventListener("click", function() {
    this.style.display = "none";
    closeMenu.style.display = "block";
    nav.style.display = "block";
    contacts.style.display = "block";
});
closeMenu.addEventListener("click", function() {
    this.style.display = "none";
    openMenu.style.display = "block";
    nav.style.display = "none";
    contacts.style.display = "none";
});