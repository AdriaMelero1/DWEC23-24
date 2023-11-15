// Recuperar los elementos del DOM que nos interesan
const boton = document.getElementsByClassName('boton');
const cerrar = document.getElementsByClassName('cerrar-popup');
const envoltorio = document.getElementsByClassName('envoltorio-popup');




//EVENTOS

//Click sobre el boton 'mostrar pop up'
boton[0].addEventListener('click', () => {
    envoltorio[0].style.display = 'block';
});


// Click sobre el boton 'cerrar pop up'
cerrar[0].addEventListener('click', () => {
    envoltorio[0].style.display = 'none';
});

//Click en el envoltorio -> cierra el pop up
envoltorio[0].addEventListener('click', () => {
    envoltorio[0].style.display = 'none';
});