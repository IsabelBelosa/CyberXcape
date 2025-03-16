document.addEventListener("DOMContentLoaded", function () {
    const aparienciaBtn = document.getElementById("apariencia"); // Imagen de apariencia
    const body = document.body;

    // Verificar si hay un tema guardado en localStorage
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }

    // Evento para cambiar el tema
    aparienciaBtn.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        // Guardar preferencia en localStorage
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
});
