import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { FaGraduationCap } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosBookmarks } from "react-icons/io";

export default function Offerings() {
    const [offeringsData, setOfferingsData] = useState([]);

    useEffect(() => {
        axios.get('https://wufoo-server.vercel.app/offers')
            .then(response => {
                setOfferingsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const iconMap = {
        FaPeopleGroup: <FaPeopleGroup className="text-5xl mb-3" />,
        FaGraduationCap: <FaGraduationCap className="text-5xl mb-3" />,
        IoIosBookmarks: <IoIosBookmarks className="text-5xl mb-3" />
    };

    return (
        <div className="container mx-auto px-4 pt-8">
            {/* Adjust grid layout for different screen sizes */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center items-center">
                {offeringsData.map((offering) => (
                    <Card
                        key={offering._id}
                        className="transition-transform duration-300 ease-in-out hover:scale-105 hover:border border-orange-500 max-w-sm mx-auto"
                    >
                        <CardBody>
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className="mb-2 uppercase text-center text-sm md:text-lg lg:text-xl"
                            >
                                <div className="flex flex-col justify-center items-center">
                                    {iconMap[offering.icon]}
                                    <p className='text-sm xl:text-xl'>{offering.title}</p>
                                </div>
                            </Typography>
                            {/* Responsive height for description */}
                            <Typography className="text-center text-[14px] md:text-sm h-[110px] md:h-[120px] lg:h-[220px] xl:h-[160px]">
                                {offering.description}
                            </Typography>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}
