//querySelector
//parámetro: un selector CSS

/* const para = document.querySelector('body > div:nth-child(3) > p:nth-child(2)');

console.log(para); */


//querySelectorAll
//parámetro: un selector CSS

/* const paras = document.querySelectorAll('p');

console.log(paras[0]);

paras.forEach(para => {
    console.log(para); 
}); */



//getElementById
//Parámetro: nombre del identificador

/* const titulo = document.getElementById('titulo');

console.log(titulo); */


//getElementsByClassName
//Parámetro: nombre de la clase asociada a ese elemento

/* const errors = document.getElementsByClassName('error');

console.log(errors); */




//getElementsByTagName
//Parámetro: nombre del tag del elemento

/* const paras = document.getElementsByTagName('p');

console.log(paras); */





//Modificar contenido de la pagina
//innerHTML

//let para = document.querySelector('p');
/* let paras = document.querySelectorAll('p');
let p1 = paras[0];
let contenidoP1 = p1.innerHTML;
console.log(contenidoP1);
p1.innerHTML = "Requete";
contenidoP1 = p1.innerText;
console.log(contenidoP1); */




//Obtener y establecer atributos
/* let enlace = document.querySelector('a');
let url = enlace.getAttribute("href");

console.log(url);

enlace.setAttribute('href', 'http://www.seat.es')

url = enlace.getAttribute("href");

console.log(url); */



//Añadir y eliminar estilos
//style
/* let error = document.querySelector('body > div.error');

error.style.backgroundColor = "blue";
//error.style.backgroundColor = ""; */






//Añadir y eliminar clases
/* let error = document.querySelector('body > div.error');

// console.log(error.classList);

error.classList.add('paco');

error.classList.remove('error'); */


/* let paras = document.getElementsByTagName('p');
let hijo = paras[2];
let padre = hijo.parentNode;

console.log(padre);
let primerHermano = padre.firstElementChild;

console.log(primerHermano);

let siguienteHermano = hijo.nextElementSibling;

console.log(siguienteHermano); */








//EVENTOS

const par = document.querySelector('p');

/* par.addEventListener('mouseover', escribe);*/

function escribe() {
    console.log('He hecho click en el primer parrafo');
} 

par.addEventListener('click', (e) =>{
    console.log(e.target.innerText);
    e.target.innerText = "textocambiado";
    console.log(e.target.innerText);

});


/* par.addEventListener('mouseover', () => {
    console.log("Mouseouber");
}); */

document.addEventListener("keydown", (e) =>{
    console.log("Tecla presionada: " + e.key);
});