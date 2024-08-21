import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { FaGraduationCap } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosBookmarks } from "react-icons/io";

export default function Offerings() {
    const offeringsData = [
        {
            id: 1,
            title: "Skilled Lecturers",
            description: "Skilled lecturers are experts in their subject areas, delivering lessons with clarity and engaging teaching methods. They foster a supportive learning environment, encouraging student participation and critical thinking.",
            icon: <FaPeopleGroup className="text-5xl mb-3" />
        },
        {
            id: 2,
            title: "Scholarship Facility",
            description: "The scholarship facility provides financial assistance to students based on academic merit, financial need, or other specific criteria. It helps students pursue their education without the burden of high tuition fees.",
            icon: <FaGraduationCap className="text-5xl mb-3" />
        },
        {
            id: 3,
            title: "Book Library & Store",
            description: "The book library offers a vast collection of academic, fiction, and reference materials for borrowing and study. The store provides students with the option to purchase textbooks, stationery, and other.",
            icon: <IoIosBookmarks className="text-5xl mb-3" />
        }
    ];

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4 xl:gap-5">
            {offeringsData.map((offering) => (
                <Card key={offering.id} className="mt-6 w-96 hover:scale-105 hover:border border-orange-500">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2 uppercase">
                            <div className="flex flex-col justify-center items-center">
                                {offering.icon}
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
