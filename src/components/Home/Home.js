import React from 'react';
import ClientComment from '../ClientComment/ClientComment';
import Banner from '../Header/Banner/Banner';
import Package from '../Packages/Package/Package';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Package></Package>
            <ClientComment></ClientComment>
        </div>
    );
};

export default Home;