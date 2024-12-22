import React, { useState, useEffect, useCallback } from 'react';
import InputField from '../shared/InputField';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { logo } from './Images';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    // Checking if user is authenticated when the component loads
    useEffect(() => {
        const token = sessionStorage.getItem("authToken");
        if (token) {
            // If token exists, navigate to the dashboard
            navigate("/admin");
        }
    }, [navigate]);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Handle form input change
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError(''); // Clear error on input change
    };

    // Handle login form submission
    const handleLogin = useCallback((event) => {
        event.preventDefault();

        // Simple form validation
        const validateForm = (email, password) => {
            if (!email || !password) {
                return "Please enter a valid email and password.";
            }
            return null;
        };

        const errorMessage = validateForm(formData.email, formData.password);
        if (errorMessage) {
            setError(errorMessage);
            return;
        }

        let data = JSON.stringify(formData);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.REACT_APP_BACKEND_API_URL}/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                // Store token in sessionStorage
                sessionStorage.setItem('authToken', response.data.authToken);
                // Reload the page to ensure state is updated
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
                setError("Login failed. Please try again.");
            });
    }, [formData]);

    return (
        <div className="container w-50 vh-100 d-flex justify-content-center align-items-center">
            <div className="text-white d-grid p-5 w-75">
                <div className="text-center">
                    <div className="text-center">
                        <img
                            src={logo}
                            alt="MetaBlog Logo"
                            className="flip-logo"
                            style={{ width: '100px', height: 'auto', marginBottom: '20px' }}
                        />
                    </div>
                    <h3>Welcome to MetaBlog</h3>
                    <p className='text-muted'>
                        Access your personalized Meta Blog dashboard by logging in.
                        Manage your posts, create new content, and stay connected with your readers.
                        Sign in to start sharing your stories with the world!
                    </p>
                </div>
                <div className="rounded-3 p-5 border border-1 border-dark bg-dark-shine align-self-center">
                    <form className="row g-3 text-white w-100" onSubmit={handleLogin}>
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label">Email or Username</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                id="inputEmail4"
                                className='form-control text-white bg-dark email-input'
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-12 password-container">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                placeholder="**********"
                                id="inputPassword4"
                                className='form-control text-white bg-dark email-input password-input'
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            <span className="eye-icon" onClick={togglePasswordVisibility}>
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {error && <p className="text-danger">{error}</p>}
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary form-btn w-100">
                                Log in
                            </button>
                            <p className="signup-text">
                                Don't have an account? <a href="/sign-up">Sign Up</a>
                            </p>
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

export default SignIn;
