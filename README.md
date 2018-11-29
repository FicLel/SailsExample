# Sails JS & Vue 2
|||
|--|--|
|||
|![enter image description here](https://sailsjs.com/images/logo_sails.png )  | ![enter image description here](https://vuejs.org/images/logo.png) |
## Sails JS
[Sails](https://sailsjs.com) JS es un framework de node js diseñado para emular el famoso diseño MVC muy parecido a Ruby on Rails.
Para instalarlo: `npm install sails -g`
Luego de elegir la plantilla usaremos los siguientes comandos dentro de nuestra carpeta seleccionada: 

 1. `sails new nombre_proyecto`
 2. `npm install`
 3. `sails lift`

Con esto podremos ver nuestra pantalla de inicio de Sails de nuestra plantilla, esto si en caso creamos un proyecto desde cero, si clonamos este proyecto solo usaremos los pasos *1 y 2*
En nuestro directorio de la aplicacion `AppName\config\model.js` descomentaremos o nos aseguremos que de esto este `migrate: 'alter'`

Sails tiene el problema que debes estar haciendo *sails lift* en cada cambio realizado durante la producción, así que solucionaremos eso con el paso anterior y una libreria npm llamada `nodemon`

 - `npm install -g nodemon`
 - `npm update`
 - `nodemon app.js`

Con esto solucionaremos el problema de estar montando el servidor en cada cambio, nota `migrate: 'alter'` es solo en ***produccion***

## Vue

Vue js puede ser implementado de forma modular, por lo que puede ser usado como solo una libería o incluso podría usarse de forma completa para levantar una aplicación, en este caso hemos usado el CLI, que se encuentra la versión 3.

![](https://vuejs.org/images/components.png)

1. [Vue.Js 2](https://vuejs.org/ "Vue.Js 2").
2. [Vue CLI](https://github.com/vuejs/vue-cli "Vue CLI").
3. Router `npm install vue-router --save`
4. Axios `npm install axios --save`
5. Para el uso de SASS `npm install sass-loader --save-dev` y `npm install --save-dev node-sass`

### Datos encontrados durante el desarrollo

1. Problema de acceso ajeno a url
En `config\security.js` Verificar 
```  cors: {
     allRoutes: true,
     allowOrigins: '*',
     //allowCredentials: true,
   }, ``` 
y ``` csrf: false ```