import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const CourseCard = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get('https://wufoo-server.vercel.app/courses');
                setDepartments(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDepartments();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-1 justify-center items-center lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6 container mx-auto">
            {departments.map((department, index) => (
                <div key={index}>
                    <Card
                        shadow={false}
                        className="relative grid h-[28rem] md:h-[32rem] lg:h-[36rem] xl:h-[40rem] overflow-hidden text-center transition-transform transform hover:scale-105 hover:opacity-90"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                            style={{ backgroundImage: `url(${department.img})` }}
                        >
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/10" />
                        </CardHeader>
                        <CardBody className="absolute inset-0 py-8 px-6 flex flex-col justify-center items-center bg-black/50 text-white">
                            <Typography
                                variant="h4"
                                className="mb-4 font-extrabold text-sm md:text-lg lg:text-lg xl:text-xl text-[#F3511E]"
                            >
                                {department.name}
                            </Typography>
                            <Typography
                                variant="h2"
                                className="font-medium text-[14px] md:text-sm lg:text-sm xl:text-sm h-44 md:h-32 lg:h-48 xl:h-52"
                            >
                                {department.description}
                            </Typography>

                            <Link to={`/application?department=${department.department}`}>
                                <button className='bg-[#F3511E] p-2 rounded-lg text-[14px] md:text-sm lg:text-sm xl:text-sm'>Apply Now</button>
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default CourseCard;
