import DataTable from 'datatables.net-dt';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AllPostPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch posts from the backend
        axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/posts`)
            .then((response) => {
                console.log("Posts:", response.data.posts); // Verify the structure
                setPosts(response.data.posts);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching posts:', err);
                setError('Failed to fetch posts');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (posts.length > 0) {

            // Initialize DataTable with additional configuration
            const table = new DataTable('#allPosts', {
                paging: true, // Enables pagination
                searching: true, // Enables search box
                ordering: true, // Enables sorting
                info: true, // Shows the table info (e.g., "Showing 1 to 10 of 20 entries")
            });
            return () => table.destroy();

        }
    }, [posts]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="col py-3 text-white">
            <h1>All Posts</h1>
            <table id="allPosts" className="display" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post._id}>
                            <td>{post.title || 'N/A'}</td>
                            <td>{post.authorName || 'N/A'}</td>
                            <td>{post.description || 'N/A'}</td>
                            <td>{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'N/A'}</td>
                            <td className="text-center">
                                <span className="d-flex gap-3 badge badge-success small justify-content-center">
                                    <a type="button" className="text-white" href="#">
                                        <i className="bi bi-pencil-square"></i>
                                    </a>
                                    <a type="button" className="text-white" href="#">
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
                        <th>Author</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th className="text-center">Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default AllPostPage;
