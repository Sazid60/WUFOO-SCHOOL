import React from 'react';
import NavBar from '../components/navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <div className='w-full '>
                <NavBar />
                <div className=' px-5 min-h-[calc(100vh-448px)]'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayouts;