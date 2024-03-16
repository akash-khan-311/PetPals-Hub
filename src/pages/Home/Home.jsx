import React from 'react';
import Banner from '../../components/Home/Banner';
import Category from '../../components/Home/Category';
import CallToAction from '../../components/Home/CallToAction';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <CallToAction/>
        </div>
    );
};

export default Home;