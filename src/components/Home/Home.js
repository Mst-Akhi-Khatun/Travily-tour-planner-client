import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import ClientComment from '../ClientComment/ClientComment';
import Banner from '../Header/Banner/Banner';
import Package from '../Packages/Package/Package';

const Home = () => {
    // home section
    return (
        <div>
            <Banner></Banner>
            <Package></Package>
            <ClientComment></ClientComment>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;