import { Button, Input, Option, Select, Textarea, Typography } from '@material-tailwind/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const ApplicationForm = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const department = queryParams.get('department');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
        address: '',
        guardianName: '',
        guardianContact: '',
        grade: '',
        previousSchool: '',
        hobbies: '',
        subject: department || '',
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
        toast.success('Successfully toasted!')
        // Uncomment and adjust the URL according to your backend
        // try {
        //     await axios.post('/api/admissions', formData);
        //     alert('Application submitted successfully!');
        //     setFormData({
        //         name: '',
        //         email: '',
        //         phone: '',
        //         dob: '',
        //         address: '',
        //         guardianName: '',
        //         guardianContact: '',
        //         grade: '',
        //         previousSchool: '',
        //         hobbies: '',
        //         subject: '', 
        //     });
        // } catch (error) {
        //     alert(`Error submitting application: ${error}`);
        // }
    };

    return (
        <div className="container mx-auto p-6 max-w-lg">
            <Typography variant="h4" color="blue-gray" className="mb-6 text-center uppercase text-[#FF5722] font-extrabold">
                Student Admission Form
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    label="Full Name"
                    required
                />
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
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleChange}
                    label="Guardian's Full Name"
                    required
                />
                <Input
                    name="guardianContact"
                    type="tel"
                    value={formData.guardianContact}
                    onChange={handleChange}
                    label="Guardian's Contact Number"
                    required
                />
                <Select
                    label="Grade Level"
                    value={formData.grade}
                    onChange={(value) => handleSelectChange(value, 'grade')}
                    required
                >
                    <Option value="Grade 1">Grade 1</Option>
                    <Option value="Grade 2">Grade 2</Option>
                    <Option value="Grade 3">Grade 3</Option>
                </Select>
                <Input
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    label="Previous School Name"
                />
                <Textarea
                    name="hobbies"
                    value={formData.hobbies}
                    onChange={handleChange}
                    label="Hobbies and Interests"
                    rows={3}
                />
                <Textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    label="Address"
                    rows={4}
                    required
                />
                <Select
                    label="Select Subject"
                    value={formData.subject}
                    onChange={(value) => handleSelectChange(value, 'subject')}
                    required
                >
                    <Option value="Electrical-Engineering">Electrical Engineering</Option>
                    <Option value="Microbio-Engineering">Microbio Engineering</Option>
                    <Option value="Computer-Engineering">Computer Engineering</Option>
                    <Option value="Civil-Engineering">Civil Engineering</Option>
                    <Option value="Textile-Engineering">Textile Engineering</Option>
                    <Option value="Biomedical-Engineering">Biomedical Engineering</Option>
                </Select>
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
