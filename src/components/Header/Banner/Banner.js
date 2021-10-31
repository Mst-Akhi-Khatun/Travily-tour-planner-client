import React from 'react';
import './Banner.css';

const Banner = () => {
    // this is banner section
    return (
        <div className="banner-section d-flex justify-content-center align-items-center text-uppercase">
            <div className="text-white px-2">
                <h2>WELCOME TO</h2>
                <h1 className="text-white px-3 py-2 mt-2 text fw-bolder"> travily <span className=""> tour planner</span></h1>
                <p className="fs-4 fst-italic">Get Ready To Travel The World</p>
            </div>
        </div>
    );
};

export default Banner;