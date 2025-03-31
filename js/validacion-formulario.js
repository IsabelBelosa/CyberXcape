//Función que recibe una cadaena y devuelve true si es alfabética y false en caso contrario

function validaresAlfabetico(cadena) {
    return /^[a-zA-Z\sáéíóúñ]+$/.test(cadena);
}

//Función que recibe una cadena y devuelve true si es un correo electrónico válido y false en caso contrario

function validarCorreo(correo) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(correo);
}

//Función que recibe una sala y un número de personas y devuelve true si el número de personas es válido para la sala y false en caso contrario
//La sala 1 es Neutral Hack con capacidad 2-8 personas
//La sala 2 es Estación Omega con capacidad 2-6 personas
//La sala 3 es Experimento X-33 con capacidad 2-10 personas

function validarNumeroJugadores(sala, numeroJugadores) {
    if(sala === 1)
        return numeroJugadores >= 2 && numeroJugadores <= 8;
    else if(sala === 2)
        return numeroJugadores >= 2 && numeroJugadores <= 6;
    else if(sala === 3)
        return numeroJugadores >= 2 && numeroJugadores <= 10;
}

//Funcion que recibe una fecha y devuelve true si es posterior a la fecha actual y false si es anterior a la fecha actual

function validarFecha(fecha){
    let fechaActual = new Date(); //Obtenemos la fecha actual
    let fechaSeleccionada = new Date(fecha); //Convertimos la fecha seleccionada a objeto Date
    return fechaSeleccionada > fechaActual; //Comparamos las fechas para saber si la fecha seleccionada es posterior a la fecha actual
}

//Funcion que recibe un vector con las horas / hora selecionada y devuelve true si las horas son consecutivas y false en caso contrario

function validarHoras(horas){
    if(horas.length === 1 || horas.length === 4) //Si solo hay una hora seleccionada o 4 horas seleccionadas, se considera que son consecutivas
        return true;
    else{
        for(let i = 0; i < horas.length - 1; i++){
            if (horas[i] + 1 !== horas[i + 1])
                return false;
        }
        return true;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let formContacto = document.forms["form_book"];
    let botonReserva = formContacto["botonReserva"];

    botonReserva.addEventListener("click", function(event) {
        let esCorrecto = true;
        let errores = [];

        let num_jugadores = parseInt(formContacto["inputjugadores"].value);
        let sala = parseInt(formContacto["inputsalas"].value);
        let nombre = formContacto["inputnombre"].value;
        let apellido = formContacto["inputapellidos"].value;
        let correo = formContacto["inputcorreo"].value;
        let fecha = formContacto["inputfecha"].value;
        let horas = [];
        let checkboxes = document.querySelectorAll("input[type=checkbox]:checked"); //Obtenemos los checkboxes seleccionados

        for(let i = 0; i < checkboxes.length; i++){
            horas.push(parseInt(checkboxes[i].value));
        }

        if (horas.length === 0) {
            esCorrecto = false;
            errores.push("Debe seleccionar al menos una hora");
        }
        

        // validacion de cada campo
        //Número de jugadores
        if (!validarNumeroJugadores(sala, num_jugadores)) {
            esCorrecto = false;
            errores.push("El número de jugadores no es válido");
            //añadir la clase error al input
            formContacto["inputjugadores"].classList.add("error");
        }
        else{
            //Si el número de jugadores es válido, se elimina la clase error
            formContacto["inputjugadores"].classList.remove("error");
        }

        //Nombre
        if (!validaresAlfabetico(nombre)) {
            esCorrecto = false;
            errores.push("El nombre no es válido");
            //añadir la clase error al input
            formContacto["inputnombre"].classList.add("error");
        }
        else{
            //Si el nombre es válido, se elimina la clase error
            formContacto["inputnombre"].classList.remove("error");
        }

        //Apellido
        if (!validaresAlfabetico(apellido)) {
            esCorrecto = false;
            errores.push("El apellido no es válido");
            //añadir la clase error al input
            formContacto["inputapellidos"].classList.add("error");
        }
        else{
            //Si el apellido es válido, se elimina la clase error
            formContacto["inputapellidos"].classList.remove("error");
        }

        //Correo
        if (!validarCorreo(correo)) {
            esCorrecto = false;
            errores.push("El correo no es válido");
            //añadir la clase error al input
            formContacto["inputcorreo"].classList.add("error");
        }
        else{
            //Si el correo es válido, se elimina la clase error
            formContacto["inputcorreo"].classList.remove("error");
        }

        //Fecha
        if (!validarFecha(fecha)) {
            esCorrecto = false;
            errores.push("La fecha debe posterior a la actual");
            //añadir la clase error al input
            formContacto["inputfecha"].classList.add("error");
        }
        else{
            //Si la fecha es válida, se elimina la clase error
            formContacto["inputfecha"].classList.remove("error");
        }
        
        //Horas
        if (!validarHoras(horas) || horas.length === 0) {
            esCorrecto = false;
            errores.push("Las horas seleccionadas no son consecutivas");
        }

        if (!esCorrecto)
        {
            // Juntamos todas las cadenas con un salto de línea
            // y usamos los pop-ups de SweetAlert2 para mostrar los errores
            // https://sweetalert2.github.io/
            var CadenaErrores = errores.join("<br>");
            Swal.fire({
                title: "Error",
                html: CadenaErrores,
                icon: "error",
                background: '#000000',
                color: '#ffffff',
                confirmButtonColor: '#eb2cde',
                customClass: {
                    popup: 'swal2-popup-custom',
                    confirmButton: 'swal2-confirm-button-custom',
                    closeButton: 'swal2-close-button-custom',
                    icon: 'swal2-icon-custom'
                }
            });
        }
        else // Si los datos son correctos, se envía la reserva al servidor
        {
            // Creamos un objeto reserva con los datos del formulario
            let reserva = {};

            reserva.num_jugadores = parseInt(formContacto["inputjugadores"].value);
            
            // Parsear la sala seleccionada
            switch (formContacto["inputsalas"].value) {
                case "1":
                    reserva.sala = "Neutral Hack";
                    break;
                case "2":
                    reserva.sala = "Estación Omega";
                    break;
                case "3":
                    reserva.sala = "Experimento X-33";
                    break;
            }


            // Parsear la dificultad seleccionada
            switch (formContacto["inputdificultad"].value) {
                case "1":
                    reserva.dificultad = "Facil";
                    break;
                case "2":
                    reserva.dificultad = "Intermedio";
                    break;
                case "3":
                    reserva.dificultad = "Dificil";
                    break;
            }

            reserva.nombre = formContacto["inputnombre"].value;
            reserva.apellidos = formContacto["inputapellidos"].value;
            reserva.correo = formContacto["inputcorreo"].value;
            reserva.fecha = formContacto["inputfecha"].value;

            let checkboxes = document.querySelectorAll('#horas input[type="checkbox"]');
            let horas = [];
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    switch (checkboxes[i].value) {
                        case "1":
                            horas.push("16:00h");
                            break;
                        case "2":
                            horas.push("17:00h");
                            break;
                        case "3":
                            horas.push("18:00h");
                            break;
                        case "4":
                            horas.push("19:00h");
                            break;
                    }
                }
            }
            reserva.horas = horas;

            // Enviamos la reserva al servidor
            postReservas(reserva);
        }  

        event.preventDefault(); // Detener el envío del formulario
    });
});