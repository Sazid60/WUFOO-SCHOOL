import React from 'react';
import {Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';

const departments = [
    {
        name: 'Electrical Engineering',
        description: 'Focuses on the design and development of electrical systems and electronic devices, ranging from power generation to advanced telecommunications. It covers key areas such as circuit design, power systems, control systems, and electronics. Graduates are equipped to work in industries like renewable energy, robotics, and electronics manufacturing.',
        img: 'https://i.postimg.cc/9Xbq5NwB/Electrical-Engineering.jpg',
    },
    {
        name: 'Microbio Engineering',
        description: 'Integrates biology and engineering principles to develop solutions for biological systems. This field combines microbiology, biotechnology, and chemical engineering to innovate in areas such as waste treatment, bioprocessing, and pharmaceutical development. Microbio engineers work on creating sustainable solutions for environmental challenges and improving health care systems.',
        img: 'https://i.postimg.cc/Gh9903Cc/Microbio-Engineering.jpg',
    },
    {
        name: 'Computer Engineering',
        description: 'Focuses on computing technology, including hardware and software development. Computer engineers design and create computer systems, microprocessors, software applications, and integrated networks. This field combines electrical engineering and computer science, preparing students for careers in AI, cybersecurity, embedded systems, and IoT.',
        img: 'https://i.postimg.cc/fbd0GzY3/Computer-Engineering.jpg',
    },
    {
        name: 'Civil Engineering',
        description: 'Deals with the design, construction, and maintenance of infrastructure projects such as roads, bridges, buildings, and water systems. Civil engineers ensure that these structures are safe, sustainable, and meet regulatory standards. Specializations include structural engineering, geotechnical engineering, transportation, and environmental engineering.',
        img: 'https://i.postimg.cc/kgBSyF4v/Civil-Engineering.jpg',
    },
    {
        name: 'Textile Engineering',
        description: 'Focuses on the design and development of textile materials and manufacturing processes. It covers everything from fiber production to textile manufacturing, including dyeing, finishing, and fabric testing. Textile engineers innovate in fashion, medical textiles, and industrial fabrics, with an emphasis on sustainability and high-performance materials.',
        img: 'https://i.postimg.cc/K8Mzz9jw/Textile-Engineering.jpg',
    },
    {
        name: 'Biomedical Engineering',
        description: 'Combines engineering principles with medical sciences to improve healthcare systems. Biomedical engineers work on developing medical devices, diagnostic equipment, and artificial organs, as well as enhancing tissue engineering and biomechanics. This field plays a critical role in advancing medical treatments, improving patient care, and driving innovation in the medical industry.',
        img: 'https://i.postimg.cc/Fzrdk08c/Biomedical-Engineering.jpg',
    },
];


const CourseCard = () => {
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
