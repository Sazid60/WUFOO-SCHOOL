import React from 'react';
import Banner from '../../components/banner/Banner';
import Courses from '../../components/courses/Courses';
import NavBar from '../../components/navbar/NavBar';
import Offerings from '../../components/offerings/Offerings';


const Home = () => {
    return (
        <div>
            <div className="relative overflow-hidden">
                <div className="bg-[url('/banner.jpg')] bg-center bg-cover bg-no-repeat">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                    <NavBar className=" divide-y" />
                    <Banner/>
                </div>
            </div>
            <Offerings/>

            <Courses/>
        </div>
    );
};

export default Home;