const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("mobileDrawer");
const closeBtn = document.getElementById("closeBtn");
const overLay = document.getElementById("drawerOverlay");
const navLink = document.querySelectorAll(".mobile-nav-link");

function openDrawer(){
    drawer.classList.add("active");
    overLay.classList.add("active");
}

function cloeDrawer(){
    drawer.classList.remove("active");
    overLay.classList.remove("active");
}

menuBtn.addEventListener("click", openDrawer);
closeBtn.addEventListener("click", cloeDrawer);
overLay.addEventListener("click", cloeDrawer);

navLink.forEach (link => {
    link.addEventListener("click", cloeDrawer);
})