
//Clase planeta amb constructor
class Planeta{
    constructor(nombre, distanciaSol, tamanyoRelativo, fechaDescubrimiento){
        this.nombre = nombre;
        this.distanciaSol = distanciaSol;
        this.tamanyoRelativo = tamanyoRelativo;
        this.fechaDescubrimiento = fechaDescubrimiento;
    }

    //Metode per imprimir informació d'un plneta
    info(){
        console.log(`
        Planeta: ${this.nombre}
        Distancia al sol (millones de km): ${this.distanciaSol}
        Tamaño relativo a la tierra: ${this.tamanyoRelativo}
        Fecha de descubrimiento: ${this.fechaDescubrimiento}
        `);
    }
}

//Arrays amb informacio
const arrNombres = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Saturno"];
const arrDistancias = [57.9,108.2, 149.6, 227.9, 778.3, 1427.0];
const arrTamanyos = [0.38, 0.95, 1, 0.53, 11.21, 9.45];
const arrFechaDescubrimiento = ["265 A.C.", "1610 D.C", "1494 D.C", "1610 D.C","1610 D.C","1610 D.C"];

//Array on guardare tots els planetes
const arrPlanetas = [];


//For amb tantes iteracions com noms al array de noms, per cada iteració guarda un nou 
for(let i = 0; i < arrNombres.length; i++){
    arrPlanetas[i] = new Planeta(arrNombres[i], arrDistancias[i], arrTamanyos[i], arrFechaDescubrimiento[i]);
}

//Cambiam l'ordre del array per veure la diferencia amb el sort
arrPlanetas.reverse();
//Imprimim la info de tots els planetes
for(let i = 0; i < arrPlanetas.length; i++){
    arrPlanetas[i].info();
}

console.log("-----------------------------");

//Ordenam l'array per la distancia al sol de menor a major amb array.sort()
arrPlanetas.sort(function(a,b){return a.distanciaSol - b.distanciaSol});


//Tornam a imprimir l'array ordenat
for(let i = 0; i < arrPlanetas.length; i++){
    arrPlanetas[i].info();
}

//Imprimim la data de avui amb Date().
console.log("Hoy estamos a dia ", Date());