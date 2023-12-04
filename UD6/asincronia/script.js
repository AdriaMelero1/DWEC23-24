const div = document.querySelector('div');

const obtenerTodos = (miCallback, source) => {

	const request = new XMLHttpRequest();

	request.addEventListener('readystatechange', () => {

		if (request.readyState === 4 && request.status === 200) {

			const respuesta = JSON.parse(request.responseText);

			respuesta.forEach((e) => {
				div.innerText = e;
			});

			miCallback(undefined, respuesta);

		} else if (request.readyState === 4) {
			miCallback("No se han podido obtener los datos", undefined);

		}
	});

	// request open 
	//Parametro 1: tipo solicitud
	//Parametro 2: A quien la solicitud (a que endpoint)
	request.open('GET', source);

	// request send
	request.send();

};


//LLAMADA A LA FUNCION
//PRIMER PARAMETRO FUNCION DE CALLBACK, SEGUNDO ES EL ENDPOINT
obtenerTodos((error, datos) => {
	console.log("Callback 1 disparado");
	gestionaRespuesta(error, datos);

	

	obtenerTodos((error, datos) => {
		console.log("Callback 2 disparado");
		gestionaRespuesta(error, datos);


		obtenerTodos((error, datos) => {
			console.log("Callback 3 disparado");
			gestionaRespuesta(error, datos);
		}, 'todos/tareas3.json');


	}, 'todos/tareas2.json');


}, 'todos/tareas1.json');



function gestionaRespuesta(error, datos) {
	if (error) {
		console.log(error);
	} else {
		console.log(datos);
	}
}