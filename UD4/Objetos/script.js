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

function Web() {
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
    
}