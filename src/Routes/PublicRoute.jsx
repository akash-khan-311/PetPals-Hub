import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/root';
import Home from '../pages/Home/Home';

const Router = createBrowserRouter([{path:'/',element:<Root/>,children:[
    {path:'/',element:<Home/>}
]}])
export default Router;