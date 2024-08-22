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
        axios.get('http://localhost:8000/offers')
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
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4 xl:gap-5">
            {offeringsData.map((offering) => (
                <Card key={offering._id} className="mt-6 w-96 transition-transform duration-300 ease-in-out hover:scale-105 hover:border border-orange-500">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2 uppercase text-center">
                            <div className="flex flex-col justify-center items-center">
                                {iconMap[offering.icon]}
                                <p>{offering.title}</p>
                            </div>
                        </Typography>
                        <Typography className="text-center lg:h-48 xl:h-auto">
                            {offering.description}
                        </Typography>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}
