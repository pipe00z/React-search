import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/logo.svg';


class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo" />
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar/457a95a1b3bfd22fe22b97a86ae742e5" alt="Avatar" />
                    <h1>Felipe <br /> Zapata</h1>
                </div>

                <div className="Badge__section-info">
                    <p>Frontend Developer</p>
                    <p>pipe@hotmail.com</p>
                </div>

                <div className="Badge__footer">2020</div>
            </div>
        )
    }
}

export default Badge;