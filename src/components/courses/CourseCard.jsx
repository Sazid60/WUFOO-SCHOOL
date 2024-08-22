import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';

const CourseCard = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get('http://localhost:8000/courses');
                setDepartments(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDepartments();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 container mx-auto">
            {departments.map((department, index) => (
                <div key={index}>
                    <Card
                        shadow={false}
                        className="relative grid h-[40rem] w-full max-w-[28rem] overflow-hidden text-center transition-transform transform hover:scale-105 hover:opacity-90"
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
                                className="mb-4 font-extrabold text-lg md:text-lg lg:text-lg xl:text-2xl text-[#F3511E]"
                            >
                                {department.name}
                            </Typography>
                            <Typography
                                variant="h2"
                                className="font-medium text-xs md:text-sm lg:text-sm xl:text-sm h-36 md:h-60 lg:h-60 xl:h-44"
                            >
                                {department.description}
                            </Typography>
                            <Button className='bg-[#F3511E]'>Apply Now</Button>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default CourseCard;
