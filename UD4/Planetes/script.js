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


//Constructor planetas
function Planeta(nom, distanciaSol, tamanyoRetalivo, fechaDescubrimiento) {
    this.nom = nom;
    this.distanciaSol = distanciaSol, //Millons de km
    this.tamanyoRetalivo = tamanyoRetalivo,
    this.fechaDescubrimiento = fechaDescubrimiento,
    info = function(){
       return "Planeta: " + this.nom + "\nDistancia al sol (millons de km): " + this.distanciaSol + 
       "\nTamany relatiu a la terra: " + this.tamanyoRetalivo + "\nFecha descubriment: " + this.fechaDescubrimiento;
    }

}

//Arrays planetas
let arrMercurio = ["Mercurio", 57.9, 0.38, "265 A.C."]
let arrVenus = ["Venus", 108.2, 0.95, "1610 D.C."];
let arrTierra = ["Tierra", 149.6, 1, "1494 D.C."]; //Se descubrio que era redonda
let arrMarte = ["Marte", 227.9, 0.53, "1610 D.C."];
let arrJupiter = ["Jupiter", 778.3, 11.21, "1610 D.C."];
let arrSaturno = ["Saturno", 1427.0, 9.45, "1610 D.C."];

let arrPlanetas = [arrMercurio, arrVenus, arrTierra, arrMarte, arrJupiter, arrSaturno];

console.log(arrPlanetas.length);

for (let i = 0; i < arrPlanetas.length; i++) {
    switch (i){
        case 0:
            let mercurio = new Planeta(arrMercurio[0], arrMercurio[1], arrMercurio[2], arrMercurio[3]);
            console.log(mercurio);

            break;
    }
}

console.log(mercurio);
