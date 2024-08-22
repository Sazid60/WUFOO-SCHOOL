import React from "react";
import {

    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoIosCall } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";

function NavList() {
    return (
        <div className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

            <div className="flex justify-center items-center text-[#F3511E] gap-2"><span><IoIosCall /></span>+8801639768727</div>
            <div className="flex justify-center items-center text-[#F3511E] gap-2"><span><FaLocationArrow /></span>Dhaka,Bangladesh</div>

        </div>
    );
}

export default function NavBar() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <div className=" max-w-none px-6 py-3 shadow-none w-full bg-transparent border-0">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as=""
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 "
                >
                    <Link to="/">
                        <div className="flex justify-center items-center gap-4">
                            <img src="/wufoo.png" className="w-10 h-10" alt="" />
                            <p className="font-extrabold text-lg md:text-xl lg:text-3xl xl:text-4xl  text-[#F3511E]">WUFOO-UNIVERSITY</p>
                        </div>
                    </Link>
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6 text-[#F3511E]" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6 text-[#F3511E]" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </div>
    );
}