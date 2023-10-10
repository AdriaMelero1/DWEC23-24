/*
    ARRAYS
*/

//Definir arrays

/* let vacio = [];
let primos = [2, 3, 5, 7, 11];
let miscelanea = [1.1, true, "a", ]; //Varios tipos y coma by the face

//Los valores de los elementos no tiene pq ser constante
let n = 1024;
let tabla = [n, n+1, n+2, n+3];
console.log(tabla);
console.log(vacio.length);

let contador = [3, , 4];
console.log(contador.length);
console.log(miscelanea.length); */

//Spread
/*
let a = [1,2,3];
let b = [0, ...a, 4];

let original = [1,2,3];
let copia = [...original, ...b, ...original];
console.log(copia[5]); */

/*
let digitos = [..."0123456789ABCDEF"];

console.log(digitos); */


//Constructor de arrays

/* let a = new Array();

console.log(a);

a.push("a", 1, "adios", true);

console.log(a); */


//*****

/* let a = [1, 2, 3];

console.log(a);

delete a[2];

console.log(a);

let i = 0;

if (a[i]) {
    console.log(a[0]);
} else {
    console.log("Slot vacio");
} */




//Iterar arrays

/* let letras = [..."Hola amiguitos"];


let aux = "";


/* for(let letra of letras){
    aux += letra;
}
 
let suma = 0;


for(let [index, letra] of letras.entries()){
/*     suma += index;
    aux += letra; 
    if(index % 2 === 0) aux += letra;
}


console.log(aux); */


/* let letras = [..."Hola amiguitos"];
let mayusculas = "";
let c = 0;
let vocales = "";

letras.forEach(letra => {
/*     if(c % 2 === 0){
        mayusculas += letra.toUpperCase();
    } else{
        mayusculas += letra;
    }
    c++; 
    if(/[aeiou]/.test(letra)){
        vocales += letra;
    }
})

console.log(vocales); */



//ARRAYS MULTIDIMENSIONALES


let tabla = new Array(10);

for(let i = 0; i < tabla.length; i++) {
    tabla[i] = new Array(5);
}

for(let fila = 0; fila < tabla.length; fila++){
    for(let col = 0; col < tabla[fila].length; col++){
        tabla[fila][col] = 1;
    }
}

console.log(tabla);
