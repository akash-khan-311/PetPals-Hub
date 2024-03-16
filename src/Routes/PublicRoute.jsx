import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/root';
import Home from '../pages/Home/Home';
import PetListing from '../pages/PetListing/PetListing';
import DonationCampaign from '../pages/DonatioCampaign/DonationCampaign';
import Login from '../pages/Login/Login';

const Router = createBrowserRouter([{
    path: '/', element: <Root />, children: [
        { path: '/', element: <Home /> }, { path: '/petlisting', element: <PetListing /> }, 
        { path: '/donationcampaign', element: <DonationCampaign /> },{path: '/login', element: <Login/>}
    ]
}])
export default Router;