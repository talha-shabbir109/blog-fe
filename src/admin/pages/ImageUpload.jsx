import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
    const [image, setImage] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null); // To store the uploaded image URL

    // Handle file change
    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };

    // Handle form submission
    const handleImageSubmit = async (event) => {
        event.preventDefault();

        if (!image) {
            alert("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append('uploaded_file', image);

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Image uploaded successfully:', response.data);
            alert('Image uploaded successfully!');
            // Set the uploaded image URL (assuming the response contains the image URL)
            setUploadedImage(response.data.image.url); // Replace with the correct field from the response
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload image.');
        }
    };

    // useEffect to trigger a re-render once the uploaded image URL is set
    useEffect(() => {
        if (uploadedImage) {
            console.log("Uploaded image URL:", uploadedImage);
        }
    }, [uploadedImage]); // This will run whenever uploadedImage changes

    return (
        <div>
            <form className="row g-3 text-white" onSubmit={handleImageSubmit}>
                {/* Feature Image Upload */}
                <div className="col-md-12">
                    <label htmlFor="FeatureImage" className="form-label">Feature Image</label>
                    <input
                        type="file"
                        name="featureImage"
                        onChange={handleFileChange}
                        className="form-control text-white bg-dark email-input"
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-secondary">
                        Upload Image
                    </button>
                </div>
            </form>

            {/* Display uploaded image if it exists */}
            {uploadedImage && (
                <div className="mt-3 text-white">
                    <h5>Uploaded Image:</h5>
                    <img src={`http://localhost:8000/${uploadedImage.replace("public", "static")}`} alt="Uploaded" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
                </div>
            )}
        </div>
    );
};

export default ImageUploadForm;
