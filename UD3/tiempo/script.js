//setTimeout(funcionALlamar, milisegundos) Ejecuta la funcion funcionALlamar 
//transcurrido el tiempo indicado en el segundo parametro.

//setInterval(funcionALlamar, milisegundos) Ejecuta la funcion funcionALlamar de manera periodica segun el tiempo del segundo parametro.

// clearInterval() detiene la funcion iniciada con setInterval(); 

//clearTimeout() detiene la ejecucion iniciada con setTimeOut(); 

function crono() {
    let elCrono;
    let miFecha = new Date();
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();
    let ampm = "pm";


    if(horas > 12){
        ampm = "pm";
        horas -= 12;
    } else {
        ampm = "am";
    }

    if(horas < 10) {horas = "0" + horas}
    
    if(minutos < 10) {minutos = "0" + miFecha}
    
    if(segundos < 10) {segundos = "0" + segundos}

    let laHora = document.getElementById("lahora");
    laHora.innerHTML = horas + ":" + minutos + ":" + segundos + ":" + ampm;
}


window.onload = function() {
    elCrono = setInterval(crono,1000);
}
