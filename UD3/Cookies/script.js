//COOKIES: 

/*  
sirven para: 
    -monitorizar actividad de los usuarios
    -Mantener opciones de visualizacion o aspecto para el usuario
    -Almacenar variables en el lado cliente
    -Identificacion de o autenticación

*/
/* 
function crearCookie(usuarioCookie) {
    console.log("Creando la cookie...");
    usuarioCookie += ";expires=Tue, 07 Nov 2023 12:15:00 GMT";
    document.cookie = "usuario=" + encodeURIComponent(usuarioCookie);

}


function leerCookies() {
    console.log("Leyendo las cookies...");

    console.log(decodeURIComponent(document.cookie));
} */







//LOCALSTORAGE
/* 
    setItem(clave, valor);
    getItem(clave);  
*/


/* function guardaValores(){
    console.log("Guardando valores en local storage...");
    let usuario = {
        nombre: "Adria",
        apellido: "Melero"
    }
    localStorage.setItem("usuario", JSON.stringify(usuario));
}



function leerValores(){
    console.log("Leyendo valores de local storage...");
    let valor = localStorage.getItem("usuario");

    console.log(valor == null ? "Clave no encontrada" : "Clave: " + valor);
} */

//RECURSIVIDAD

function factorial(numero){
    if(numero == 0) return 1;

    return (numero * factorial(numero - 1));
    
}



console.log(factorial(5));