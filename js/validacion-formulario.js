//Función que recibe una cadaena y devuelve true si es alfabética y false en caso contrario

function validaresAlfabetico(cadena) {
    return /^[a-z\sáéíóúñ]+$/.test(cadena);
}

//Función que recibe una sala y un número de personas y devuelve true si el número de personas es válido para la sala y false en caso contrario
//La sala 1 es Neutral Hack con capacidad 2-8 personas
//La sala 2 es Estación Omega con capacidad 2-6 personas
//La sala 3 es Experimento X-33 con capacidad 2-10 personas

function validarrNumeroPersonas(sala, numeroPersonas) {
    if(sala === 1)
        return numeroPersonas >= 2 && numeroPersonas <= 8;
    else if(sala === 2)
        return numeroPersonas >= 2 && numeroPersonas <= 6;
    else if(sala === 3)
        return numeroPersonas >= 2 && numeroPersonas <= 10;
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

