import React, { Component } from 'react';
import './LanguageToggle.scss';

class LanguageToggle extends Component {

    render() {
        return (
            <div>
                <div className={(this.props.lang === 'es' ? 'selected ' : '') + 'link-item lang'}>
                    <button onClick={e => this.props.setLang('es')}>ES</button>
                </div>
                <div className={(this.props.lang === 'en' ? 'selected ' : '') + 'link-item lang'}>
                    <button onClick={e => this.props.setLang('en')}>EN</button>
                </div>
            </div>
        )
    }
}

export default LanguageToggle;