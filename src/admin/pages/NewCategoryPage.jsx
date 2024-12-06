import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use this to redirect after category creation
import axios from 'axios';

function NewCategoryPage() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.title.trim()) {
            alert("Title is required.");
            return;
        }

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_API_URL}/categories`,
                {
                    name: formData.title,
                    description: formData.description,
                }
            );

            console.log("Category created:", response.data);

            alert("Category created successfully!");
            navigate('/admin/categories'); // Redirect to the categories list page
        } catch (error) {
            console.error("Error creating category:", error);
            alert("Failed to create category. Please try again.");
        }
    };

    return (
        <div className="rounded-3 p-5 border border-1 border-dark m-5 bg-dark-shine w-100">
            <h3 className='text-white'>Create Category</h3>
            <form className="row g-3 text-white" onSubmit={handleSubmit}>
                <div className="col-md-12">
                    <label htmlFor="Title" className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g., Technology"
                        id="title"
                        className="form-control text-white bg-dark email-input"
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <textarea
                        className="form-control text-white bg-dark email-input mh-100"
                        style={{ minHeight: '200px' }}
                        placeholder="Add a description"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-secondary">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewCategoryPage;
