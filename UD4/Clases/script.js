//Objetos

/* let unCliente = {
    nombre: "Joan",
    apellido: "Pons",
    "direccion Fiscal": "c/ Desconocida",
    "+-+-+-+": "lasdadsl",
    pago: {
        cantidad: 35,
        tipo: "Tarjeta"
    },
    diHola: function(){
        return "hola";
    },
    notas: [7, 10, 5, 8],
    calcularMedia: function(){
        let media = 0;
        for(let i = 0; i < this.notas.length; i++){
            media += this.notas[i];
        }
        console.log(this.nombre, " tiene una media de ", (media / this.notas.length));
    }
}

unCliente.calcularMedia();


unCliente.diAdios = function() {
    console.log("Adioss");
}

unCliente.diAdios(); */




//Constructores

/* function Web() {
    this.url = "http://www.google.es";
    this.nombre = "localhost";

    this.muestraInformacion = function () {
        return this.url + this.nombre;
    }
}


let otraWeb = new Web();

console.log(otraWeb.muestraInformacion());

otraWeb.visitas = 2;

console.log(otraWeb);

Web.miFuncion = new function(){
    
} */






//CLASES

 class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }

    saludar(){
        console.log(`Hola soy ${this.nombre}`);
    }
}


const adria = new Persona("Adrià");


//adria.saludar();




//HERENCIA

/* 

class Empleado extends Persona {
    constructor(nombre, salario) {
        super(nombre);
        this.salario = salario;
    }

    trabajar(){
        console.log(`${this.nombre} Esta trabajando por ${this.salario} euros`);
    }
}

const maria = new Empleado("María", 1450);

maria.saludar();
maria.trabajar(); */





//Simbolos: Son una nueva clase de datos, introducida por ES6. Son valores únicos e inmutables. 
//Se pueden utilizar como identificadores de propiedades objetos

/* const id = Symbol("id");
const persona = {
    nombre:"Joan",
    [id]: 33
}

console.log(persona[id]); */




//ITERADORES: son objetos que implementan el protocolo de iteracion de JS
//Permiten recorrer y acceder los elementos de una collecion uno a uno.

/* const numeros = [1,2,3];
const iterador = numeros[Symbol.iterator]();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); */





//SET: permite almacenar valores unicos de cualquier tipo. 
//No permite duplicados y ofrece metodos para 
//agregar, eliminar y verificar la existencia de elementos



const setNumeros = new Set();
setNumeros.add(1);
setNumeros.add(2);
setNumeros.add(3);


console.log(setNumeros.has(2));
console.log(setNumeros.has(0));

setNumeros.delete(2);

console.log(setNumeros.has(2));

console.log(setNumeros.size);

console.log(setNumeros);

const iteradorNumeros = setNumeros[Symbol.iterator]();


console.log(iteradorNumeros.next());
console.log(iteradorNumeros.next());
console.log(iteradorNumeros.next());




//MAP: permite almacenar pares clave-valor donde cada clave es unica
//Permite operaciones de busqueda, insercion y eliminacion

const mapaNombres = new Map();

mapaNombres.set("nombre","Adria");
mapaNombres.set("edad", 33);
mapaNombres.set("profesion", "Desarrollador");

console.log(mapaNombres.get("profesion"));

console.log(mapaNombres.has("nombre"));

mapaNombres.delete("edad");

console.log(mapaNombres.size);