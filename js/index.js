let minutos = 60;
let segundos = 0;

function actualizarCronometro() {
    if (minutos === 0 && segundos === 0) {
        clearInterval(intervalo);
        return;
    }

    if (segundos === 0) {
        minutos--;
        segundos = 59;
    } else {
        segundos--;
    }

    let formatoTiempo = 
        (minutos < 10 ? "0" + minutos : minutos) + ":" +
        (segundos < 10 ? "0" + segundos : segundos);

    document.getElementById("cronometro").innerText = formatoTiempo;
}

let intervalo = setInterval(actualizarCronometro, 1000);