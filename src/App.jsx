/* general */
import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { routes } from './routes/index'
import NavBar from './components/nav-bar/NavBar'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar routes={routes} />
                    <div className="view-container">
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
