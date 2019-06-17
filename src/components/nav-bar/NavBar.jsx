import React, { Component } from 'react';
import './NavBar.scss'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from "react-redux";

import getString from "../../config/lang/langService"
import { changeLanguage } from "../../redux/actions/app.actions"
import LanguageToggle from "../language-toggle/LanguageToggle"

function mapStateToProps(state) {
    return {
        app: state.app
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeLanguage: lang => dispatch(changeLanguage(lang))
    };
}
class NavBarComponent extends Component {

    setLang = (lang) => {
        this.props.changeLanguage(lang)
    }

    render() {
        const { routes } = this.props;
        const lang = this.props.app.lang;

        return (
            <div className="nav-bar">
                <div className="row">
                    <div className="col-4">
                        <div className="nav-header">
                            <h1>React Redux Seed</h1>
                        </div>
                    </div>
                    <div className="col-5">
                        <div>
                            {routes.map((route, index) => (
                                <div key={index} className="link-item">
                                    <NavLink to={route.path}>{getString(lang, route.name)}</NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-2">
                        <LanguageToggle lang={lang} setLang={this.setLang} />
                    </div>
                </div>
            </div>
        )
    }
}

NavBarComponent = withRouter(NavBarComponent);

const NavBar = connect(
    mapStateToProps, mapDispatchToProps
)(NavBarComponent)

export default NavBar;