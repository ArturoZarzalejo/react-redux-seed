import React, { Component } from 'react';
import './BaseComponent.scss';

class BaseComponent extends Component {

    render() {
        return (
            <div className="base-component">
                <div className="text-container">
                    <h1>{this.props.title}</h1>
                    <p>
                        <strong>
                            Redux
                        </strong>
                        <br />
                        Este proyecto tiene integrado Redux v6.0. Inicialmente, la store tene una estructura básica
                        con información de configuración de la aplicación (lenguage, entorno, versión) en ./redux
                        <br/>
                        <a href="https://es.redux.js.org/">redux.js.org</a>
                    </p>
                    <p>
                        <strong>
                            Routing
                        </strong>
                        <br />
                        Para el enrutado, esta aplicación usa la librería react-router. Las rutas iniciales están definidas en ./routes
                        <br/>
                        <a href="https://github.com/ReactTraining/react-router">github.com/ReactTraining/react-router</a>
                    </p>
                    <p>
                        <strong>
                            Tests
                        </strong>
                        <br />
                        Por defecto, esta aplicación usa Jest y Enzyme para los tests
                        <br/>
                        <a href="https://jestjs.io/">jestjs.io</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default BaseComponent;