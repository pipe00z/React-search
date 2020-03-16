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
                    <img className="Badge__avatar" src={this.props.avatar} alt="Avatar" />
                    <h1>{this.props.firstName}<br /> {this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <p>{this.props.jobTitle}</p>
                    <p>@{this.props.twitter}</p>
                </div>

                <div className="Badge__footer">2020</div>
            </div>
        )
    }
}

export default Badge;