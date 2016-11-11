//Como leer un archivo en nodejs
const http = require ('http'),
	  fs = require('fs');

/*Se le pasa un path a readFile */
 //versión sincrona
//var html = fs.readFileSync('./index.html');

http
	.createServer((req,res)=>{	
		//versión asíncrona
		var html = fs.readFile("./index.html",(err,html)=>{
			/* Van a parte de la respuesta
			var i=0;
			while(true){
				i++;
				res.write(i+"");//escibe un pedazo de la repuesta
			}*/

			//Escribir el encabezado de la respuesta
						//estatus code, otros parametros
			//res.writeHead(200,{"Content-Type":"text/html"});
			//res.writeHead(200,{"Content-Type":"text/html"});
			res.writeHead(200,{"Content-Type":"application/json"});			
			res.write(JSON.stringify({nombre:"Mauricio",username:"Mauricioo"}));
			res.write(html);//escibir en el navegador
			res.end();	
		});		
	})
	.listen(8080);
