import DataTable from 'datatables.net-dt';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllPostPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch posts from the backend
    const fetchPosts = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/posts`)
            .then((response) => {
                setPosts(response.data.posts);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching posts:', err);
                setError('Failed to fetch posts');
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchPosts(); // Initial fetch of posts
    }, []);

    // Initialize DataTable once posts are loaded
    useEffect(() => {
        if (posts.length > 0) {
            const table = new DataTable('#allPosts', {
                paging: true,
                searching: true,
                ordering: true,
                info: true,
            });

            // Cleanup DataTable instance when component is unmounted or posts change
            return () => table.destroy();
        }
    }, [posts]);  // Re-run effect whenever posts state changes

    // Delete a post
    const handleDelete = (postId) => {
        // Show confirmation prompt
        const confirmDelete = window.confirm('Are you sure you want to delete this post?');
        if (!confirmDelete) return;

        // Call API to delete post
        axios.delete(`${process.env.REACT_APP_BACKEND_API_URL}/posts/${postId}`)
            .then((response) => {
                alert('Post deleted successfully');
                // Refresh the page after deletion and stay on the same page
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error deleting post:', error);
                alert('Error deleting post');
            });
    };

    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || doc.body.innerText || '';
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="col py-3 text-white">
            <h1>All Posts</h1>
            <table id="allPosts" className="display" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Created At</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post._id}>
                            <td>{post.title || 'N/A'}</td>
                            <td>{stripHtmlTags(post.postBody) || 'N/A'}</td>
                            <td>{post.category?.name || 'N/A'}</td> {/* Assuming category has a name field */}
                            <td>{post.authorName || 'N/A'}</td> {/* Check if authorName is available */}
                            <td>{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'N/A'}</td>
                            <td className="text-center">
                                <span className="d-flex gap-3 badge badge-success small justify-content-center">
                                    <a type="button" className="text-white" href="#">
                                        <i className="bi bi-pencil-square"></i>
                                    </a>
                                    <a
                                        type="button"
                                        className="text-white"
                                        href="#"
                                        onClick={() => handleDelete(post._id)} // Handle delete click
                                    >
                                        <i className="bi bi-trash3-fill"></i>
                                    </a>
                                    <a type="button" className="text-white" href="#">
                                        <i className="bi bi-eye-fill"></i>
                                    </a>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Created At</th>
                        <th className="text-center">Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default AllPostPage;
