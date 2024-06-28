import React, { useState } from 'react';
import "./LoginForm.css";
import { GoogleLogin } from '@react-oauth/google';
const App = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',

    });

    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        // Validation
        const newErrors = {};
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'Enter name';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Enter emailid';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        setErrors(newErrors);
        
        // If there are no errors proceed with form submission
        if (Object.keys(newErrors).length === 0) {
            console.log('Loggined Successfully', formData);
        }
    };


    //google
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };


    return (

        <form onSubmit={handleSubmit}>

            <div align="center">
                <div>
                    <h2 >Login Page</h2>
                </div><br/>

                <label>UserName:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
            </div>

            <div align="center"><br />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>

            <div align="center"><br />
                <button type="Login">Login</button>
            </div>

            <br/>
            <h5 align='center'>(or)</h5>

            <div align="center">
                <br />
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </div>
        </form>

    );
};


export default App;