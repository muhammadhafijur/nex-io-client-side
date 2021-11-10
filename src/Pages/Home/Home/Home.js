import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <Banner></Banner>
            <Features></Features>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;