document.addEventListener("DOMContentLoaded", function() {
    let formContacto = document.forms["form_book"];
    let seleccionarSala = formContacto["inputsalas"];

    seleccionarSala.addEventListener("change", function() {
        let sala = seleccionarSala.value;
        
        //encuentra el id TituloSala y cambia su contenido 
        let tituloSala = document.getElementById("TituloSala");
        //resto de campos...

        switch(sala){
            //Neutral Hack
            case "1":
                tituloSala.innerHTML = "Neutral Hack";
                //resto de campos...
            break;

            //Estacion Omega
            case "2":
                tituloSala.innerHTML = "Estación Omega";
                //resto de campos...
            break;

            //Experimento X-33
            case "3":
                tituloSala.innerHTML = "Experimento X-33";
                //resto de campos...
            break;
        }
    });
})