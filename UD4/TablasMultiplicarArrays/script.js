

//Primer declaram l'array amb 10 posicions
let tabla = new Array(10);


//Dins cada posicio del array declaram un nou array de 10 posicions
for(let i = 0; i < tabla.length; i++) {
    tabla[i] = new Array(10);
}


//Recorrem cada posicio del array i l'array dins de cada posicio
for(let fila = 0; fila < tabla.length; fila++){
    for(let col = 0; col < tabla[fila].length; col++){
        //Asignam a cada posicio el valor del producte de l'index de l'array principal i el subarray
        tabla[fila][col] = fila * col;
        //Imprimim les tables de multiplicar
        console.log(fila," * ", col, " = ", tabla[fila][col]);
    }
}

