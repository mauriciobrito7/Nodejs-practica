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
			res.write(html);//escibir en el navegador
			res.end();	
		});		
	})
	.listen(8080);
