## Aplicacion FULL STACK CITAS MEDICAS 

Se realiza aplicación full stack que permite crear doctores y pacientes y de acuerdo a ello generar citas medicas

La aplicación se realizó con:

    Frontend: Angular
    Backend: NodeJS, ExpressJS, Typescript
    Database: MongoDB

## Servidor de desarrollo

Para ejecutar la aplicación en el local recuerde en primer lugar instalar NodeJS y MongoDB, luego clone el repositorio, dentro de el encontrará varias carpetas, para ejecutar la aplicación:

     1.Primero iniciar servicio de MongoDB
     2.Entrar a la carpeta Backend
     3.Conectar tu base de datos
     4.Crear tu archivo .env para variables de entorno
     5.Ya con los pasos anteriores, abrir la consola y ejecutar el comando npm run dev

Luego de esto, alternamente, abrir tu carpeta Frontend

    1.Ejecutar comando npm install
    2.Abrir la consola y ejecutar ng serve -o

De esta manera nuestra aplicación está conectada a nuestro backend y funcionaría correctamente

IMPORTANTE: Recuerde por facilidad manejar el Frontend en el PUERTO:4200 y el Backend en el PUERTO:5000
            es muy importante que el front se ejecute en este puerto ya que el back solo permite conexiones por este.
