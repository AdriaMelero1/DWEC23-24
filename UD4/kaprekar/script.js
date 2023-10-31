let numero = 0;
let intentos = 0;


while (numero > 9988 || numero < 22 && numeroValido){
    numero = prompt("Elije un numero2 (min 2 diferentes)");
    intentos++;
    console.log(`intentos: ${intentos}`);
}





console.log(ordenaNumeros());


console.log("Num1: " + num1 + "\n" + "Num2 " + num2);





function ordenaNumeros() {

    let num1 = [];
    let num2 = [];

    let strNumero = numero.toString();

    for (let i = 0; i < 4; i++) {

        num1[i] = strNumero.charAt(i);
    }

    num1.sort();

    num2 = num1.slice();

    num2.sort(function (a, b) {
        return b - a;
    });

    return num1, num2;
}



function numeroValido(){
    numStr = numero.toString();


    console.log(`string.length: ${numStr.length}`);
    let repetidos = 0;
    for (let i = 0; i < numStr.length; i++){
        for (let a = 0; a < numStr.length; a++){
            if(i == a){
                
            }else{
                if(numStr[i] == numStr[a]){
                    repetidos++;
                }
            }
        }
    }
    repetidos = repetidos/2;
    console.log(`Repetidos: ${repetidos}`);
    return repetidos >= 3;
}




