import React from 'react';
import image from '../../images/Chose-Us/chose-1.png';

const ChooseUs = () => {
    return (
        <div className="row container-fluid my-5">
            <div className="col-md-6">
                <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6" style={{ textAlign: 'justify' }} >
                <h1 className="text-uppercase">Why Choose < br /> <span className="text-warning">Travily Tour Planner ?</span></h1>
                <p>A booking is the arrangement that you make when you book something such as a hotel room, a table at a restaurant, a theatre seat, or a place on public transport.We provide the continual delivery of superior technical support while simultaneously providing industry leading customer.</p>
                <h4>Professional and Certified</h4>
                <p> We provide the continual delivery of superior technical support while simultaneously providing industry leading customer.</p>
                <h4>Get Instant Tour Bookings</h4>
                <p>A booking is the arrangement that you make when you book something such as a hotel room, a table at a restaurant, a theatre seat, or a place on public transport.</p>
            </div>
        </div>
    );
};

export default ChooseUs;