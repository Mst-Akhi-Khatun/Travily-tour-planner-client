import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/Not-Found/not-found.jpg';

const NotFound = () => {
    return (
        <div className="py-5 container">
            <img src={image} alt="" className="w-100" />
            <Link to="/home">
                <button className="btn btn-warning mt-3">BACK TO HOME</button>
            </Link>
        </div>
    );
};

export default NotFound;