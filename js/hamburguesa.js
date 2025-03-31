document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navList = document.getElementById("nav-list");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("open"); // Activa/desactiva la clase 'open'
        menuIcon.innerHTML = navList.classList.contains("open") ? "✖" : "&#9776;"; // Cambia el icono
    });
});