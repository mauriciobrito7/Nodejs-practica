/* 
HTTP es un modulo que se encarga de servir aplicaciones web
*/

const http = require ("http");

let manejador = function (req, res){
	console.log("Recibimos una petición");
	/*Terminar conexión */
	res.end("hola mundo");
};

const servidor = http.createServer(manejador);
servidor.listen(8080);