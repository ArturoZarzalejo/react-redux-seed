# Proyecto Semilla React

<em>Este proyecto sirve de base para comenzar una nueva aplicación de React, contando con una arquitectura deseable y una serie de herramientas necesarias sin tener que incorporarlas manualmente.<em>

La arquitectura propuesta es bastante sencilla y principalmente consiste en un directorio para componentes y otro para vistas. El enrutado se gestiona desde el directorio de routes y el estado de la aplicación con Redux. En common se propone guardar estilos y assests comunes para toda la aplicación, con un archivo ya creado para constantes de SASS como colores.

**Redux**
Haciendo uso de la librería react-redux, esta aplicación ya tiene Redux integrado. Se incluye una arquitectura muy sencilla con un reducer con la información más básica de la aplicación: 

 - Entorno
 - Lenguaje
 - Número de versión

**Routing**
Se ha optado por incluir la librería react-router para el routing, implementado en App.jsx, donde se iteran las rutas definidas en ./routes/index.js. En el componente de navegación se exportan los links.

**Tests**
Se han incluido las librerías de Jest y Enzyme para los tests. 

**Localización** 
Se incluye un servicio para la traducción de los strings en la aplicación (./config/lang/).
El servicio langService recibe el idioma actual de la aplicación (gestionado con Redux) y el string que se quiere obtener, y lo devuelve en base a lo que se defina en el .js del idioma deseado. Además, se ha implementado un componente básico (./components/language-toggle) para hacer el cambio.

----------

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

