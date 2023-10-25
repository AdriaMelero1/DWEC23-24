//setTimeout(funcionALlamar, milisegundos) Ejecuta la funcion funcionALlamar 
//transcurrido el tiempo indicado en el segundo parametro.

//setInterval(funcionALlamar, milisegundos) Ejecuta la funcion funcionALlamar de manera periodica segun el tiempo del segundo parametro.

// clearInterval() detiene la funcion iniciada con setInterval(); 

//clearTimeout() detiene la ejecucion iniciada con setTimeOut(); 

/* function crono() {
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
} */





//INTENT ADRIA


/* let tiempo = new Date("0");

let horas = tiempo.getHours();
let minutos = tiempo.getMinutes();
let segundos = tiempo.getSeconds();

let microno = document.getElementById("crono");

microno.innerHTML = horas + ":" + minutos + ":" + segundos;


function crono() {



        
    if(segundos < 10) {segundos = "0" + segundos}



    microno.innerHTML = horas + ":" + minutos + ":" + segundos;


    segundos++;
    

    console.log(segundos);
}



function startCrono() {
    
    intervalo = setInterval(crono, 1000);
    console.log("starttt");
}

function stopCrono() {
    clearInterval(intervalo);

}
 */


//SOLUCIO JOAN


let elCrono;
let miFecha = new Date();
let laHora = document.getElementById("lahora");


//Inicializo el tiempo para cronometro
miFecha.setHours(0, 0, 0, 0);

//inicializo el texto de "laHora"
laHora.innerHTML = "00:00:00";


function crono() {
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();

    segundos++;

    if(segundos == 60){
        segundos = 0;
        minutos += 1;

        miFecha.setMinutes(minutos);
    }

    if(minutos == 60){
        minutos = 0;
        horas++;

        miFecha.setMinutes(minutos);
        miFecha.setHours(horas);
    }

    miFecha.setSeconds(segundos);

    if(horas < 10) {horas = "0" + horas}
    if(minutos < 10) {minutos = "0" + minutos}
    if(segundos < 10) {segundos = "0" + segundos}

    laHora.innerHTML = horas + ":" + minutos + ":" + segundos;
}

function reiniciarCrono() {
    miFecha.setHours(0, 0, 0, 0);
    laHora.innerHTML = "00:00:00";
}

function start(){
    elCrono = setInterval(crono, 1000);

}

function stop(){
    clearInterval(elCrono);
}

function reset(){
    setTimeout(reiniciarCrono);
}