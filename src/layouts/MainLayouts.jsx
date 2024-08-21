import React from 'react';
import NavBar from '../components/navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <div className='w-full'>
                <div className=''>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayouts;