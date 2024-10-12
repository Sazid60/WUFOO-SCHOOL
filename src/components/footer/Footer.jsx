import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="px-4 divide-y bg-black text-white">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-fu">
                            <img src="/wufoo.png" alt="" />
                        </div>
                        <span className="self-center text-lg md:text-2xl font-extrabold uppercase">WUFOO-University</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 text-[14px] md:text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-orange-900 font-extrabold">Admissions</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="/application">Apply Now</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Application Deadlines</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Admission Requirements</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-orange-900 font-extrabold">Academics</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Programs Offered</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Faculty</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Campus Tour</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-orange-900 font-extrabold">Resources</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Financial Aid</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Scholarships</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Guides</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase text-orange-900 font-extrabold">Follow Us</div>
                        <div className="flex justify-start space-x-3 text-xl">
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-600">© 2024 Wufoo-University. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
