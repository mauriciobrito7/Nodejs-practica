const http = require ('http'),
	  fs = require('fs');

http
	.createServer((req,res)=>{	
		//versión asíncrona
		var html = fs.readFile("./index.html",(err,html)=>{
			var html_string=html.toString();
			/*Expresiones regulares
				Es una forma de agrupar o identificar patrones en una
				cadena.
			 */
			/*El metodo match recibe una expresión regular y devuelve un arreglo
			con todas las incidencia se encuentra el patrón, este patrón lo que busca
			es un valor entre llaves
			 */
			//Expresión regular que busca en el HTML donde haya {x}
			var variables = html_string.match(/[^\{\}]+(?=\})/g);
			var nombre="Mauricio";
			
			for(let i=variables.length-1;i>=0;i--){
				/*eval lo que hace es te permite pasar un string y poder evaluar como codigo js */
				//Para obtener el valor de dicha variable
				var value = eval(variables[i]);
				//Se reemplaza el valor encerrado en llaves por el valor correspondiente
				html_string= html_string.replace("{"+variables[i]+"}", value);
			}

			res.writeHead(200,{"Content-Type":"text/html"});			
			res.write(html_string);//escibir en el navegador
			res.end();	
		});		
	})
	.listen(8080);