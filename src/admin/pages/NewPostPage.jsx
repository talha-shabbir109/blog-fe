import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';
import ImageUploadForm from './ImageUpload'

function NewPostPage() {
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        author: '', // Added author field
        featureImage: null, // To store the image file
    });

    const navigate = useNavigate();
    const editorRef = useRef(null);

    // Handle input change for text fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            featureImage: file, // Set the selected file
        }));
    };

    // const handleImageSubmit = async (event) => {
    //     event.preventDefault();

    //     // Title and author are required
    //     if (!formData.title.trim() || !formData.author.trim()) {
    //         alert("Title and Author are required.");
    //         return;
    //     }
    // }

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Title and author are required
        if (!formData.title.trim() || !formData.author.trim()) {
            alert("Title and Author are required.");
            return;
        }

        // Create a FormData object for sending the data to the backend
        const postData = new FormData();
        postData.append('title', formData.title);
        postData.append('category', formData.category);
        postData.append('author', formData.author); // Add author to the post data
        postData.append('postBody', editorRef.current.getContent());

        if (formData.featureImage) {
            postData.append('uploaded_file', formData.featureImage); // File upload
        }

        try {
            // Send data to backend API for image upload
            const uploadResponse = await axios.post(
                `${process.env.REACT_APP_BACKEND_API_URL}/upload`, // Correct backend endpoint for file upload
                postData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            console.log('File uploaded:', uploadResponse.data);

            // Now, create the post along with image path
            const postDataToCreatePost = {
                title: formData.title,
                postBody: editorRef.current.getContent(),
                category: formData.category,
                author: formData.author, // Include author in the final post data
                featureImage: uploadResponse.data.filePath, // Use the file path returned from upload
            };

            // Send data to backend API to create the post
            const postResponse = await axios.post(
                `${process.env.REACT_APP_BACKEND_API_URL}/posts`, // Your post creation API
                postDataToCreatePost,
                { headers: { 'Content-Type': 'application/json' } }
            );
            alert('Post created successfully');

            // Redirect to All Posts page
            navigate('/admin/posts');
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Error creating post');
        }
    };

    // Fetch categories on component mount
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/categories`)
            .then((response) => {
                setCategories(response.data.categories);
            })
            .catch((err) => {
                console.error('Error fetching categories:', err);
            });
    }, []);

    return (
        <div className="rounded-3 p-5 border border-1 border-dark m-5 bg-dark-shine w-100">
            <ImageUploadForm />
            <hr></hr>
            <h3 className='text-white'>Create Post</h3>
            <form className="row g-3 text-white" onSubmit={handleSubmit}>
                {/* Category selection */}
                <div className="col-md-12">
                    <label htmlFor="Categories" className="form-label">Category</label>
                    <select
                        className="form-select form-control text-white bg-dark email-input"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="">Select Category ....</option>
                        {categories.length > 0 ? (
                            categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))
                        ) : (
                            <option value="">No Categories available</option>
                        )}
                    </select>
                </div>

                {/* Post Title */}
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

                {/* Author Name */}
                <div className="col-md-12">
                    <label htmlFor="Author" className="form-label">Author</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Author Name"
                        id="author"
                        className="form-control text-white bg-dark email-input"
                    />
                </div>
                {/* TinyMCE Editor for Post Content */}
                <div className="col-md-12">
                    <label htmlFor="Post" className="form-label">Post Content</label>
                    <Editor
                        apiKey="3scb9i6bi827fypcrllkjhntdkacfmejz7iokfedas4npbv7"
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        initialValue="<p>Start creating something amazing...</p>"
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste code help wordcount",
                            ],
                            toolbar:
                                "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                        }}
                    />
                </div>

                {/* Submit Button */}
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-secondary">
                        Create Post
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewPostPage;
