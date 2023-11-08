const numeroKaprekar = 6174;
//Pasos realizados hasta llegar a kaprekar
let pasos = 0;
//Numero entrado por el usuario 
let numero;

//Pedimos un numero al usuario y lo capturamos (sera una cadena (String))
const promptText = "Elija cualquier numero de 4 digito que este formado por al menos dos digitos diferentes, incluido el cero.";
//Lanzamos prompt
//numero = prompt(promptText);
numero = "1324";

if(!validaNumero(numero)) {
    console.log("El numero introducido no es valido");
} else {
    while(numero != numeroKaprekar) {

        //Llamamos a la funcion kaprekar
        numero = kaprekar(numero);

        //Aumentamos el numero de pasos
        pasos++;

        // Evitamos bucles infinitos i/o innecesarios

        if(pasos > 7){
            console.log("Numero de pasos superado, algo no va bien...");
            break;
        }

        //Si el numero obtenido es el de kaprekar, informamos de los pasos realizados
        if(numero == numeroKaprekar){
            console.log("Pasos realizados: " + pasos);
        }
    }
}

/* 
    Funcion que realiza las operaciones necesarias para obtener el numero de kaprekar pasandole como parametro 
    el numero a tratar. Esta funcion devuelve el numero obtenido
*/
function kaprekar(numero) {

    //Creamos un array para poder tratar el numero digito a digito
    let arrNumero = new Array();

    //Variables para guardar los numeros a guardar
    let mayor, menor;



    //Añadimos el numero al array

            /*     for(let i = 0; i < numero.length(); i++){
                    arrNumero[i] = numero[i];
                } */

            /*     for(let i = 0; i < numero.length(); i++){
                    arrNumero[i] = numero.charAt(i);
                } */

    for(let i = 0; i < numero.length; i++){
        arrNumero.push(numero.charAt(i));
    }

    //Ordenamos el array con sort. Quedara de menor a mayor
    arrNumero.sort();

    // Guardamos en la variable "menor" el contenido del array "unido"
    menor = uneDigitos(arrNumero);

    //Le damos la vuelta al array
    //arrNumero.reverse();
    arrNumero = daleLaVuelta(arrNumero);

    //Guardamos en la variable mayor el contenido del arrNumero girado
    mayor = uneDigitos(arrNumero);

    //Realizamos la resta
    numero = mayor - menor;

    console.log(mayor + " - " + menor + " = " + numero);

    //return formateaNumeroACuatroDigitos(numero.toString(), true);
    
}

/* 
    Esta funcion devuelve una cadena formada por los elementos del array pasado parametro, 
    tomados como caracteres desde el de menor indice hasta el ultimo

*/
function uneDigitos(arrNumero) {

    let cadena = "";

    for(let i = 0; i < arrNumero.length; i++){
        cadena += arrNumero[i];
    }

    return cadena;
}


/* 
    Devuelve un array con los elementos cambiados simetricamente respecto al array pasado por parametro
*/
function daleLaVuelta(arrNumero) {
    
    arrAux = new Array(arrNumero.length);

    for(let j = 0; j < arrNumero.length; j++){
        arrAux[arrNumero.length - 1 - j] = arrNumero[j];
    }

    return arrAux;
}



/* 
    Añade ceros delante o detras de una cadena que representa un valor numerico que necesariamente ha de tener 4 digitos
*/
function formateaNumeroACuatroDigitos(numero, esIzquierda){

    if(esIzquierda){
        if(numero.length == 3){
            numero = "0" + numero;
        } else if(numero.length == 2){
            numero = "00" + numero;
        } else if(numero.length == 1){
            numero = "000" + numero;
        }
    } else {
        if(numero.length == 3){
            numero = numero + "0";
        } else if(numero.length == 2){
            numero = numero + "00";
        } else if(numero.length == 1){
            numero = numero + "000";
        }
    }

    return numero;
}


/* 
    Funcion que validara un numero, comprobando que:
    -Es un numero
    -Que no tenga mas de 4 digitos
    -Al menos 2 digitos diferentes
    -Un digito no se repita mas de 2 veces
*/
function validaNumero(numero) {

    // Que sea un numero
    if(numero == null || isNaN(numero)){
        return false;
    }

    //Menos de 4 digitos
    /* if(numero.length > 4) {
        return false;
    } */

    if(+numero > 9999 || +numero < 22){
        return false;
    }


    //Almenos 2 digitos diferentes
    //const numeros = numero.split("");
    //const numeros = Array.from(String(numero), Number);
    //const numeros = [...numero];
    const setNumeros = new Set(numero);
    //console.log(setNumeros);

    //Un set no tiene numeros repetidos entonces si tiene dos o mas elementos hay 2 digitos diferentes
    if(setNumeros.size < 2) {
        return false;
    }

    //Falta validacion de digito no repetido mas de 2 veces
    
    return true;
}