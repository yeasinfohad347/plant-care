import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';

const HomeLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default HomeLayouts;