<!-- @format -->

# Nodejs, Expressjs, Postgresql (Sequelize)

## Temario

- [Node](#Nodejs)
  - [¿Que es node?](#¿Que-es-node?)
  - [Instalar nodejs y npm](#Instalando-node-y-npm)
  - [Crear server con el modulo http con node](#Crear-server-http-con-node)
- [Expressjs](#Expressjs)
  - [JSON](#JSON)
  - [Que es express](#Expres)
  - [Crear simple server](#Express-simple-server)
  - [Nodemon y esm](#Nodemon-esm)
  - [Crear rutas](#Rutas)
  - [Routas y controladores](#Rutas-y-controladores)
  - [Body-parser](#Bodyparser)
  - [CRUD](#CRUD)
  - BONUS Pruebas TDD
- [Express y Postgresql](#Conectar-con-BD-relacional)
  - Proyecto y estructura
  - Crear server
  - Definir Rutas
  - Definir Controllers
  - Instalar Sequelize
  - Conectar con postgresql
  - Crear modelos (Sequelize)
  - Migraciones (Sequelize)
  - Seeders
- [Express y mongoDB]
  - Cargar imagenes y guardar
  - Cargar imagenes y guardar en base64
  - cargar archivo CSV y guardar datos en base de datos.

## Nodejs

### ¿Que es node?

Es un entorno de ejecucion para javascript construido con el mmotor Javascript V8 de chrome.
Este entorno de ejecución een tiempo real incluye todo lo que se necesita par aejecutar un programa escrito en JS.

### Instalando node y npm

Vamos a instalar, para eso necestimaos instalar node, yo lo hare para mac.

Al instalar node.js viene junto con una version de npm (node package manager) que nos proporciona bibliotecas de terceros que nos ayudan en el desarrollo.

ver version de node y npm en la terminal

### Crear server http con node

Iniciar un proyecto con node `npm init -y`

- nos crea un package.json
- escribir un console.log
- correr por terminal `node httpserver.js`
- correr desde script de package.json

Servidor basico http:

- HTTP es un protocolo de red.
- Un protocolo de red son un conjunto de reglas y permisos para establecer la comunicacion entre dispositivos. Se encarga de configuracion de la conexion.
- HTTP (Protocolo de transferencia hipertexto) es el protocolo para la web (todo tipo de transacciones, que el navegador pida una pagina web o recursos a un server y este responda)

- https://medium.com/@germancutraro/servidor-http-node-js-4725004bf386

- https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/

- https://nodejs.dev/learn/the-nodejs-http-module

- https://flaviocopes.com/node-http-server/

# Express

Es un framework para nodejs que permite crear una infraestructura web rapida, minimmalista y flexible

### Body parser

Es un middleware que permite analizar los requests entrantes y disponerlos con la propiedad req.body

### Nodemon

Es una herramienta que ayuda a node a ejecutar scripts de manera automatica y cuando un archivo tenga un cambio la aplicacion se actualizara de forma automatica

### ESM

Es un cargador de modulos ECMAScript, esto nos permite soportar el uso de modulos en node.

PASOS:

1. Crear carpeta
2. Inicializar proyecto de node
3. Instlar dependencias
4. crear config basica de express
