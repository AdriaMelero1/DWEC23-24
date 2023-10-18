/* const ciudades = [
    {
        municipio: "zaragoza",
        provincia: "Zaragoza"
    },
    {
        municipio: "Ávila",
        provincia: "Ávila"
    },
    {
        municipio: "Madrid",
        provincia: "Madrid"
    },
    {
        municipio: "Barcelona",
        provincia: "Barcelona"
    }
];


//Ordena ciutats de Z a A
ciudades.sort((a, b) =>{
    return -a.provincia.localeCompare(b.provincia);
});

console.log(ciudades); */

//JS ES6

/* const miArray = ["A", "b", "C"];

miArray.push("D");

console.log(miArray); */



//DESESTRUCTURACION
/* const numeros = [1,2,3,4,5];

const [a,b,c] = numeros;

console.log(a,b,c); */



/* const persona = {
    nombre: "Andreu",
    edad: 33
}

const {nombre, edad} = persona;

console.log(nombre); */



/* const nombre = "Josep";
const edad = 33;

const persona = {
    nombre,
    edad
}

console.log(persona.nombre); */


//Template strings
//operador de interpolacion ${}

/* const nombre = "Bob";
const edad = 32;

const mensaje = `Hola ${nombre} tienes ${edad} años`

console.log(mensaje); */


//Spread

/* const numeros = [1,2,3];

const nuevosNumeros = [...numeros,4,5];

console.log(nuevosNumeros); */



//Parametros por defecto

/* function saludar(nombre = "Invitado"){
    console.log(`Hola, ${nombre}`);
}

saludar("Joan");
saludar(); */



//Parametros rest

/* function sumar(...numeros){

    let resultado = 0;
    for(let numero of numeros){
        resultado += numero;
    }

    return resultado;
}


console.log(sumar(33,33,33,33,33)); */





//Funciones flecha () => {}

/* function sumar(a, b) {
    return a + b;
} */

/* const sumar = (...numeros) => {
    let resultado = 0;

    for(let numero of numeros){
        resultado += numero;
    }

    return resultado;
};


console.log(sumar(3, 5,4,6,3,5,4324)); */





//METODOS DE ARRAYS
//forEach(): ejecuta una funcion (nuestra)
//Una vez por cada elemento del array
/*
const numeros = [5,4,7,9,5];

 const multiplica = (n) => {
    return n * 2;
} 


let numeros2 = [];

numeros.forEach((numero) => {
    
    numeros2.push(multiplica(numero));
});

console.log(numeros2); */





//map(): crea un nuevo array con los resultados de aplicar una funcion a cada elemento del array

/* const numeros = [5,4,7,9,5];

 const multiplica = (n) => {
    return n * 2;
} 

let nuevoArray = numeros.map((numero) => {
    return multiplica(numero);
})


console.log(nuevoArray); */





//filter(): crea un nuevo array con todos los elementos que cumplan una condicion determinada

/* const numeros = [5,4,7,9,5,8,2];

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log(numerosPares); */






//reduce(): aplica una funcion a un acumulador y a cada elemento del array (de izq a derch) para reducirlo a un unico valor

/* const numeros = [5,4,7,9,5,8,2];
const suma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log(suma); */





//find(): devuelve el primer elemento del array que cumpla una determinada condicion
/* const numeros = [5,4,7,9,5,8,2];

const numeroEncontrado = numeros.find((numero) => {
    return numero >= 8;
});

console.log(numeroEncontrado); */




//findIndex(): devuelve el indice del primer elemento del array que cumple con una funcion de prueba o retornara -1 si no 
//encuentra ninguno

/* const numeros = [5,4,7,9,5,8,2];
const indiceEncontrado = numeros.findIndex((numero) => {
    return numero >= 6;
});

console.log(indiceEncontrado); */




//some(): comprueba si almenos un elemento del array cumple con una condicion determinada

/* const numeros = [5,4,7,9,5,8,2];

const tieneNumeroPar = numeros.some((numero) => {
    return numero % 2 === 0;
});

console.log(tieneNumeroPar); */





//every(): comprueba si todos los elementos de un array cumplen una condicion

/* const numeros = [2,4];

const todosSonPares = numeros.every((numero) => {
    return numero % 2 === 0;
});

console.log(todosSonPares); */