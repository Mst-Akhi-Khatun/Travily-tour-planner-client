import React from 'react';
import image from '../../images/Chose-Us/chose-1.png';

const ChooseUs = () => {
    return (
        <div className="row container-fluid">
            <div className="col-md-6">
                <img src={image} alt="" height="800" />
            </div>
            <div className="col-md-6">
                <h1>Why Choose < br /> <span className="text-warning">Travily-Tour-Planner</span></h1>
                <p>There are many variations of passages of Lorem Ipsum is simply free text available in the market for you, but the majority have suffered alteration in some form.</p>
            </div>
        </div>
    );
};

export default ChooseUs;