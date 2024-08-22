import { Button, Input, Option, Select, Textarea, Typography } from '@material-tailwind/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaChevronDown} from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import 'animate.css';

const ApplicationForm = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const department = queryParams.get('department');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        bloodGroup: '',
        religion: '',
        gender: '',
        dob: '',
        email: '',
        phone: '',
        nationality: '',
        presentStreetAddress: '',
        presentCity: '',
        presentPostCode: '',
        presentCountry: '',
        permanentStreetAddress: '',
        permanentCity: '',
        permanentPostCode: '',
        permanentCountry: '',
        fatherName: '',
        fatherOccupation: '',
        fatherPhone: '',
        motherName: '',
        motherOccupation: '',
        motherPhone: '',
        guardianName: '',
        guardianContact: '',
        grade: '',
        previousSchool: '',
        subject: department || '',
        entryTerm: '',
        hobbies: '',
    });

    useEffect(() => {
        if (department) {
            setFormData((prevData) => ({ ...prevData, subject: department }));
        }
    }, [department]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSelectChange = (value, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            await axios.post('https://wufoo-server.vercel.app/candidates', formData);
            toast.success('You Have Successfully Applied!');
            setFormData({
                firstName: '',
                lastName: '',
                bloodGroup: '',
                religion: '',
                gender: '',
                dob: '',
                email: '',
                phone: '',
                nationality: '',
                presentStreetAddress: '',
                presentCity: '',
                presentPostCode: '',
                presentCountry: '',
                permanentStreetAddress: '',
                permanentCity: '',
                permanentPostCode: '',
                permanentCountry: '',
                fatherName: '',
                fatherOccupation: '',
                fatherPhone: '',
                motherName: '',
                motherOccupation: '',
                motherPhone: '',
                guardianName: '',
                guardianContact: '',
                grade: '',
                previousSchool: '',
                subject: department || '',
                entryTerm: '',
                hobbies: '',
            });
        } catch (error) {
            toast.error(`Error submitting application: ${error}`);
        }
    };

    return (
        <div className="container mx-auto p-6 max-w-2xl">
            <Typography variant="h4" color="blue-gray" className="mb-6 text-center uppercase text-[#FF5722] font-extrabold text-2xl md:text-2xl lg:text-3xl xl:text-4xl flex flex-col justify-center items-center">
                <span>Admission Form</span>
                <FaChevronDown className='text-black animate__animated animate__bounceIn animate__infinite' />
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-6">
                    <Typography variant="h6" color="blue-gray" className="text-xl font-semibold mb-4 uppercase">
                        Personal Information
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            label="First Name"
                            required
                        />
                        <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            label="Last Name"
                            required
                        />
                        <div className="md:col-span-2 ">
                            <label className="block text-sm font-medium text-gray-700 ml-2">Gender:</label>
                            <div className="flex flex-wrap space-x-4 border border-blue-gray-200 px-4 py-2 rounded-lg text-blue-gray-600 text-sm">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={formData.gender === 'Male'}
                                        onChange={handleChange}
                                        className="form-radio"
                                        required
                                    />
                                    <span className="ml-2">Male</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={formData.gender === 'Female'}
                                        onChange={handleChange}
                                        className="form-radio"
                                        required
                                    />
                                    <span className="ml-2">Female</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Other"
                                        checked={formData.gender === 'Other'}
                                        onChange={handleChange}
                                        className="form-radio"
                                        required
                                    />
                                    <span className="ml-2">Other</span>
                                </label>
                            </div>
                        </div>
                        <div className="">
                            <label className="block text-sm font-medium text-blue-gray-600 ml-2">Blood Group:</label>
                            <select
                                name="bloodGroup"
                                value={formData.bloodGroup}
                                onChange={handleChange}
                                required
                                className="border border-blue-gray-200 px-4 py-2 rounded-lg w-full text-sm text-blue-gray-600"
                            >
                                <option value="">Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                        <div className="">
                            <label className="block text-sm font-medium text-gray-700 ml-2">Religion:</label>
                            <select
                                name="religion"
                                value={formData.religion}
                                onChange={handleChange}
                                required
                                className="border border-blue-gray-200 px-4 py-2 rounded-lg w-full text-sm text-blue-gray-600"
                            >
                                <option value="">Select Religion</option>
                                <option value="Islam">Islam</option>
                                <option value="Christianity">Christianity</option>
                                <option value="Hinduism">Hinduism</option>
                                <option value="Buddhism">Buddhism</option>
                                <option value="Sikhism">Sikhism</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                    </div>
                </div>

                <div className="mb-6">
                    <Typography variant="h6" color="blue-gray" className="text-xl font-semibold mb-4 uppercase">
                        Identity & Contact Details
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            label="Email Address"
                            required
                        />
                        <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            label="Phone Number"
                            required
                        />
                        <Input
                            name="dob"
                            type="date"
                            value={formData.dob}
                            onChange={handleChange}
                            label="Date of Birth"
                            required
                        />
                        <Input
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleChange}
                            label="Nationality"
                            required
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <Typography variant="h6" color="blue-gray" className="text-xl font-semibold mb-4 uppercase">
                        Address Information
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4 space-y-4">
                            <Typography variant="h6" color="blue-gray" className="text-lg font-semibold mb-2">
                                Present Address
                            </Typography>
                            <Input
                                name="presentStreetAddress"
                                value={formData.presentStreetAddress}
                                onChange={handleChange}
                                label="Street Address"
                                required
                            />
                            <Input
                                name="presentCity"
                                value={formData.presentCity}
                                onChange={handleChange}
                                label="City"
                                required
                            />
                            <Input
                                name="presentPostCode"
                                value={formData.presentPostCode}
                                onChange={handleChange}
                                label="Post Code"
                                required
                            />
                            <Input
                                name="presentCountry"
                                value={formData.presentCountry}
                                onChange={handleChange}
                                label="Country"
                                required
                            />
                        </div>
                        <div className="mb-4 space-y-4">
                            <Typography variant="h6" color="blue-gray" className="text-lg font-semibold mb-2">
                                Permanent Address
                            </Typography>
                            <Input
                                name="permanentStreetAddress"
                                value={formData.permanentStreetAddress}
                                onChange={handleChange}
                                label="Street Address"
                                required
                            />
                            <Input
                                name="permanentCity"
                                value={formData.permanentCity}
                                onChange={handleChange}
                                label="City"
                                required
                            />
                            <Input
                                name="permanentPostCode"
                                value={formData.permanentPostCode}
                                onChange={handleChange}
                                label="Post Code"
                                required
                            />
                            <Input
                                name="permanentCountry"
                                value={formData.permanentCountry}
                                onChange={handleChange}
                                label="Country"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <Typography variant="h6" color="blue-gray" className="text-xl font-semibold mb-4 uppercase">
                        Guardian Information
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className='space-y-4'>
                            <Input
                                name="fatherName"
                                value={formData.fatherName}
                                onChange={handleChange}
                                label="Father's Name"
                                required
                            />
                            <Input
                                name="fatherOccupation"
                                value={formData.fatherOccupation}
                                onChange={handleChange}
                                label="Father's Occupation"
                                required
                            />
                            <Input
                                name="fatherPhone"
                                type="tel"
                                value={formData.fatherPhone}
                                onChange={handleChange}
                                label="Father's Phone Number"
                                required
                            />
                        </div>
                        <div className='space-y-4'>
                            <Input
                                name="motherName"
                                value={formData.motherName}
                                onChange={handleChange}
                                label="Mother's Name"
                                required
                            />
                            <Input
                                name="motherOccupation"
                                value={formData.motherOccupation}
                                onChange={handleChange}
                                label="Mother's Occupation"
                                required
                            />
                            <Input
                                name="motherPhone"
                                type="tel"
                                value={formData.motherPhone}
                                onChange={handleChange}
                                label="Mother's Phone Number"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-4 mt-4">
                        <Input
                            name="guardianName"
                            value={formData.guardianName}
                            onChange={handleChange}
                            label="Local Guardian's Full Name"
                            required
                        />
                        <Input
                            name="guardianContact"
                            type="tel"
                            value={formData.guardianContact}
                            onChange={handleChange}
                            label="Local Guardian's Contact Number"
                            required
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <Typography variant="h6" color="blue-gray" className="text-xl font-semibold mb-4 uppercase">
                        Academic Information
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            name="previousSchool"
                            type="text"
                            value={formData.previousSchool}
                            onChange={handleChange}
                            label="Previous School Name"
                            required
                        />
                        <Select
                            label="Achieved Grade"
                            value={formData.grade}
                            onChange={(value) => handleSelectChange(value, 'grade')}
                            required
                        >
                            <Option value="A+">A+</Option>
                            <Option value="A">A</Option>
                            <Option value="A-">A-</Option>
                            <Option value="B+">B+</Option>
                            <Option value="B">B</Option>
                            <Option value="C">C</Option>
                        </Select>
                    </div>
                </div>
                <div className="mb-6">
                    <Typography variant="h6" color="blue-gray" className="text-xl font-semibold mb-4 uppercase">
                        Interests
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="">
                            <label className="block text-sm font-medium text-gray-700 ml-2">Department:</label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="border border-blue-gray-200 px-4 py-2 rounded-lg w-full text-sm text-blue-gray-600"
                            >
                                <option value="">Select Department</option>
                                <option value="Electrical-Engineering">Electrical Engineering</option>
                                <option value="Microbio-Engineering">Microbio Engineering</option>
                                <option value="Computer-Engineering">Computer Engineering</option>
                                <option value="Civil-Engineering">Civil Engineering</option>
                                <option value="Textile-Engineering">Textile Engineering</option>
                                <option value="Biomedical-Engineering">Biomedical Engineering</option>
                            </select>
                        </div>
                        <div className="">
                            <label className="block text-sm font-medium text-gray-700 ml-2">Entry Term :</label>
                            <select
                                name="entryTerm"
                                value={formData.entryTerm}
                                onChange={handleChange}
                                required
                                className="border border-blue-gray-200 px-4 py-2 rounded-lg w-full text-sm text-blue-gray-600"
                            >
                                <option value="">Select Entry Term</option>
                                <option value="Summer">Summer</option>
                                <option value="Fall">Fall</option>
                                <option value="Winter">Winter</option>
                                <option value="Spring">Spring</option>
                            </select>
                        </div>

                    </div>
                    <Textarea
                        name="hobbies"
                        value={formData.hobbies}
                        onChange={handleChange}
                        label="Hobbies and Interests"
                        rows={3}
                        className="w-full"
                    />
                </div>

                <Button type="submit" color="deep-orange" fullWidth>
                    Submit Application
                </Button>
            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default ApplicationForm;
