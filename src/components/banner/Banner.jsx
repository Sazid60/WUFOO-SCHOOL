import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <section className=''>
            <div className='relative'>
                
                    <div className="">
                        <div className="relative container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-white">
                            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold leading-none xl:max-w-6xl uppercase">Standard Syllabus For Students</h1>
                            <p className="mt-6 mb-6  text-sm md:text-lg lg:text-xl  xl:max-w-2xl dark:text-gray-50">The standard syllabus for students outlines the essential subjects and topics to be covered in a specific academic course or grade level.</p>
                            <div className="flex flex-wrap justify-center">
                            <Link to="/application"><Button className="bg-deep-orange-600">Apply Now</Button></Link>
                            </div>
                        </div>
                    </div>
            </div>

        </section>
    );
};

export default Banner;
