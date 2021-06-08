import React from 'react';
import {Link} from 'react-router-dom';
import './GoBack.css';

const GoBack = () => {
    return (
        <h3>
            <Link className="GoBack" to="/">
                Go Back!
            </Link>
        </h3>
    )
}

export default GoBack;