document.addEventListener("DOMContentLoaded", function() {
    let formContacto = document.forms["form_book"];
    let seleccionarSala = formContacto["inputsalas"];

    seleccionarSala.addEventListener("change", function() {
        let sala = seleccionarSala.value;
        
        //encuentra el id TituloSala y cambia su contenido 
        let tituloSala = document.getElementById("TituloSala");
        let fotoSala = document.getElementById("FotoSala");
        let aforoSala = document.getElementById("AforoSala");
        let duracionSala = document.getElementById("DuracionSala");
        let edadSala = document.getElementById("EdadSala");
       
        switch(sala){
            //Neutral Hack
            case "1":
                tituloSala.innerHTML = "Neutral Hack";
                fotoSala.src = "./images/NeutralHack.png";
                fotoSala.alt = "Sala 1 Neutral Hack";
                aforoSala.innerHTML = "Aforo máximo: 8 personas";
                duracionSala.innerHTML = "Duración: 60 minutos";
                edadSala.innerHTML = "Edad mínima: 12 años";
                
            break;

            //Estacion Omega
            case "2":
                tituloSala.innerHTML = "Estación Omega";
                fotoSala.src = "./images/EstacionOmega.png";
                fotoSala.alt = "Sala 2 Estacion Omega";
                aforoSala.innerHTML = "Aforo máximo: 6 personas";
                duracionSala.innerHTML = "Duración: 60 minutos";
                edadSala.innerHTML = "Edad mínima: Todos los público";

            break;

            //Experimento X-33
            case "3":
                tituloSala.innerHTML = "Experimento X-33";
                fotoSala.src = "./images/ExperimentoX-33.png";
                fotoSala.alt = "Sala 3 Experimento X-33";
                aforoSala.innerHTML = "Aforo máximo: 10 personas";
                duracionSala.innerHTML = "Duración: 60 minutos";
                edadSala.innerHTML = "Edad mínima: +18 años";
            break;
        }
    });
})