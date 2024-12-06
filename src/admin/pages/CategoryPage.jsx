import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DataTable from 'datatables.net-dt';
import DescriptionTruncator from './DescriptionTruncator';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CategoryPage() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({ _id: '', name: '', description: '' });
    const [isEditable, setIsEditable] = useState(false); // To track if the modal is editable

    const handleClose = () => setShow(false);

    const handleShowCategory = (category) => {
        setFormData({ _id: category._id, name: category.name, description: category.description });
        setIsEditable(false); // Not editable on initial open
        setShow(true);
    };

    const handleModalValue = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleEdit = () => {
        setIsEditable(true); // Enable editing
    };

    const handleSave = async (event) => {
        event.preventDefault();
        try {
            let data = JSON.stringify(formData);
            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `${process.env.REACT_APP_BACKEND_API_URL}/categories/${formData._id}`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    setCategories(categories.map(category =>
                        category._id === formData._id ? response.data.category : category
                    ));
                    alert('Category updated successfully');
                    handleClose();
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.error('Error updating category:', error);
            alert('Error updating category');
        }
    };


    useEffect(() => {
        if (categories.length > 0) {
            const table = new DataTable('#allCategories', {
                paging: true,
                searching: true,
                ordering: true,
                info: true,
            });
            return () => table.destroy();
        }
    }, [categories]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/categories`) // Adjust URL if needed
            .then((response) => {
                setCategories(response.data.categories);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching categories:', err);
                setError('Failed to fetch categories');
                setLoading(false);
            });
    }, []);

    const handleDelete = async (categoryId) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_BACKEND_API_URL}/categories/${categoryId}`);
            if (response.status === 200) {
                setCategories(categories.filter(category => category._id !== categoryId));
                alert('Category deleted successfully');
            }
        } catch (error) {
            console.error('Error deleting category:', error);
            alert('Error deleting category');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditable ? 'Edit Category' : 'View Category'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="category-modal" onSubmit={handleSave}>
                        <div className="mb-3 d-none">
                            <label htmlFor="categoryName" className="form-label">Category ID</label>
                            <input
                                type="text"
                                className="form-control"
                                id="categoryId"
                                name="id"
                                value={formData._id}
                                onChange={handleModalValue}
                                disabled={!isEditable}
                            />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="categoryName" className="form-label">Category Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="categoryName"
                                name="name"
                                value={formData.name}
                                onChange={handleModalValue}
                                disabled={!isEditable}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="categoryDescription" className="form-label ">Category Description</label>
                            <textarea
                                className="form-control"
                                style={{ minHeight: '200px' }}
                                id="categoryDescription"
                                name="description"
                                value={formData.description}
                                onChange={handleModalValue}
                                rows="3"
                                disabled={!isEditable}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    {isEditable ? (
                        <Button variant="primary" onClick={handleSave}>Save Changes</Button>
                    ) : (
                        <Button variant="warning" onClick={handleEdit}>Edit</Button>
                    )}
                </Modal.Footer>
            </Modal>

            <div className="col py-3 text-white">
                <div className="d-flex justify-content-between">
                    <h1>Categories</h1>
                    <div>
                        <Link to="/admin/categories/new" className="btn btn-secondary w-auto">
                            Create Category
                        </Link>
                    </div>
                </div>

                <table id="allCategories" className="display" style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Created At</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length > 0 ? (
                            categories.map((category) => (
                                <tr key={category._id}>
                                    <td>{category.name || 'N/A'}</td>
                                    <td>
                                        <DescriptionTruncator
                                            description={category.description || 'N/A'}
                                            wordLimit={10}
                                        />
                                    </td>
                                    <td>{new Date(category.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <span className="d-flex gap-3 badge badge-success small justify-content-center">
                                            <a
                                                type="button"
                                                className="text-white"
                                                href="#"
                                                onClick={() => handleShowCategory(category)}
                                            >
                                                <i className="bi bi-pencil-square"></i>
                                            </a>
                                            <a
                                                type="button"
                                                className="text-white"
                                                href="#"
                                                onClick={() => handleDelete(category._id)}
                                            >
                                                <i className="bi bi-trash3-fill"></i>
                                            </a>
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No categories available</td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Created At</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
}

export default CategoryPage;
