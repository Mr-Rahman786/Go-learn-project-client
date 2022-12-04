import React from 'react';
import { Link } from 'react-router-dom';

const CheackMe = () => {
    return (
        <div>
            <h3>There is our terms and condition</h3>
            <p>go back to home <Link to="/register"> Register</Link></p>
        </div>
    );
};

export default CheackMe;