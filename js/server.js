const http = require("node:http");
const fs = require("node:fs");
const mime = {
    "html": "text/html",
    "css": "text/css",
    'js' :  'text/javascript',
}

const servidor = http.createServer((pedido, respuesta) => {
    const url = new URL('http://localhost' + pedido.url)
    let camino =  url.pathname

    if (camino == '/')
        camino = '../index.html'

    else
        camino = '..'+camino

    fs.stat(camino, error => {
        if (!error) {
            fs.readFile(camino, (error, contenido) => {
                if (error) {
                    respuesta.writeHead(500, { 'Content-type': 'text/plane' })
                    respuesta.write('Error interno')
                    respuesta.end()
                } else {
                    console.log(camino);

                    const vec = camino.split('.')
                    const extension = vec[vec.length - 1]
                    const mimeArchivo = mime[extension]
                    respuesta.writeHead(200, { 'Content-type': mimeArchivo })
                    respuesta.write(contenido)
                    respuesta.end()
                }
            })
        } else {

            respuesta.write(`<!doctype html> 
                <html> 
                    <head> 
                        <body> 
                            <h1> Pagina no encontrada </h1>
                        </body> 
                    </head> 
                </html>`)
            respuesta.end()
        }
    })
});

servidor.listen(8888)
console.log("Servidor iniciado");