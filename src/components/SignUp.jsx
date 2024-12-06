import React, { useState } from 'react';
import InputField from '../shared/InputField';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const handleChange = (event) => {
        const { name, value } = event.target;

        // Update the corresponding field in the state dynamically
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Debug log to see the name and value
        console.log(`${name}: ${value}`);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior (page reload)

        // Perform validation if needed (basic example)
        if (!formData.email || !formData.username || !formData.password) {
            console.log("All fields are required.");
            return;
        }

        // Submit the form data (e.g., send to API or log it)
        console.log("Form Submitted with the following data:");
        console.log(formData);

        // You can perform additional logic like sending the data to a server here
        // Example: sending data to an API
        let data = JSON.stringify(formData);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.REACT_APP_BACKEND_API_URL}/signup`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));

                navigate('/sign-in')
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container w-50 vh-100 d-flex justify-content-center align-items-center">
            <div className="text-white d-grid p-5 w-75">
                <div className="text-center">
                    <h1>Create Your Meta Blog Account</h1>
                    <h3 style={{ color: "#4955ff" }}>
                        Your Story Starts Here!
                    </h3>
                    <p className='text-muted'>
                        Access your personalized Meta Blog dashboard by logging in.
                        Manage your posts, create new content, and stay connected with your readers.
                        Sign in to start sharing your stories with the world!
                    </p>
                </div>
                <div className="rounded-3 p-5 border border-1 border-dark bg-dark-shine align-self-center">
                    <form className="row g-3 text-white w-100" onSubmit={handleSubmit}>
                        <div className="col-md-12">
                            <label htmlFor="inputUsername" className="form-label">Username</label>
                            <InputField
                                type="text"
                                placeholder="Enter your username"
                                id="inputUsername"
                                value={formData.username}
                                name="username"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label">
                                Email
                            </label>
                            <InputField
                                type="email"
                                placeholder="example@gmail.com"
                                id="inputEmail4"
                                value={formData.email}
                                name="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-12 password-container">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <InputField
                                type={passwordVisible ? "text" : "password"}
                                placeholder="**********"
                                id="inputPassword4"
                                className="password-input"
                                value={formData.password}
                                name="password"
                                onChange={handleChange}
                            />
                            <span className="eye-icon" onClick={togglePasswordVisibility}>
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>


                        {error && <p className="text-danger">{error}</p>} {/* Display error message */}

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary form-btn w-100">
                                Sign Up
                            </button>
                        </div>
                        <div className="separator w-100 d-flex align-items-center">
                            <hr className="flex-grow-1 text-muted" />
                            <span className="py-3">OR</span>
                            <hr className="flex-grow-1 text-muted" />
                        </div>
                        <div className="social-login-buttons">
                            <button className="social-button google">
                                <FaGoogle className="icon" /> Continue with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default SignUp
