import React from 'react';
import Glasses from '../UI/popcorn.png';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div className="mb-5" id="header">
            <nav className="navbar navbar-dark bg-dark" style={{ padding: '0px' }}>
                <div className="navbar-header">
                    <Link className="navbar-brand text-md" to="/">
                        <img
                            src={Glasses}
                            style={{ width: '20%', margin: '0px', padding: '0px' }}
                            alt="Popcorn"
                        /><b>Before<sub> YOU </sub>Binge</b>
                    </Link>
                </div>
                <ul className="navbar-nav ml-auto text-light d-inline-block">
                    <li className="nav-item d-inline-block mr-4">
                        <i className="fab fa-imdb fa-3x" id="imdb-logo" />
                    </li>
                    <li className="nav-item d-inline-block mr-4">
                        <i className="fab fa-react fa-3x" id="react-logo"></i>
                    </li>
                    <li className="nav-item d-inline-block mr-4">
                        <i className="cib-redux fa-3x" id="redux-logo"></i>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default header;
