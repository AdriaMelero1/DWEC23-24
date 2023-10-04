let nomEstudiant = "Adria";
let notaExamen1 = 5;
let notaExamen2 = 8;
let notaProjecte = 6;

let notaFinal = (notaExamen1 * 0.2) + (notaExamen2 * 0.2) + (notaProjecte * 0.6);
notaFinal = notaFinal.toFixed(2);
console.log("Estudant: " , nomEstudiant, "\nNota examen 1:", notaExamen1, "\nNota examen 2:", notaExamen2, 
            "\nNota projecte: ", notaProjecte, "\nNota final: ", notaFinal);


/* 
Punt 4 a de la activitat 

if(notaFinal >= 5){
    console.log("Has aprovat!");
} else{
    console.log("Has suspés!");
}
 */

if(notaFinal >= 7){
    console.log("Enhorabona ",nomEstudiant," has tret mes de un 7!");
} else{
    console.log("Has de millorar la nota per aprovar el mòdul, ",nomEstudiant,":(");
}

