import React, { Component } from 'react';
import './Home.scss';
import { connect } from "react-redux";
import getString from '../../config/lang/langService'

// Components
import BaseComponent from '../../components/base-component/BaseComponent'

function mapStateToProps(state) {
    return {
        app: state.app
    };
}

class HomeComponent extends Component {

    render() {
        const lang = this.props.app.lang;
        return (
            <div>
                <div className="home">
                    <BaseComponent 
                        title={getString(lang, 'base_title')}
                    />
                </div>
            </div>
        )
    }
}

const Home = connect(
    mapStateToProps
)(HomeComponent)

export default Home;