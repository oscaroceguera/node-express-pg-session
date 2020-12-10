/** @format */

// Servidor basico http:

// - HTTP es un protocolo de red.
// - Un protocolo de red son un conjunto de reglas y permisos para establecer la comunicacion entre dispositivos.
// Se encarga de configuracion de la conexion.
// - HTTP (Protocolo de transferencia hipertexto) es el protocolo para la web
// (todo tipo de transacciones, que el navegador pida una pagina web o recursos a un server y este responda)

// Nodejs trae un modulo llamado http interno y para usarlo se define:
const http = require('http');

// necesitamos  host que es direccion IP
const host = '127.0.0.1'; // o mejor conocida como localhost
// necesitamos un puerto
const port = 3000;

// llamaremos al metodo createServer de http que devuelve una instancia de http.server
// Request es la peticion que haceemos al server
// Response es la respuesta del server
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Primer servidor con Node.js');
});

// por ultimo llamaremos al metodo listen  que concreta la conexion o expone el servicio
server.listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`);
});
