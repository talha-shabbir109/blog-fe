import Card from '../shared/Card'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

function PostCards() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // http://localhost:8000/api/posts
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/posts`) // Adjust endpoint if needed

            .then((response) => {
                console.log("respo", response.data.posts)
                setPosts(response.data.posts);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching posts:', err);
                setError('Failed to fetch posts');
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;


    return (
        <div>
            <div className="text-white p-2">
                <h2>Latest Post</h2>
            </div>
            <div className="d-grid gap-5 my-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* <div className="col">
                        <div className="card h-100 card-design text-white border border-1 border-dark">
                            <div className="card-body rounded-3 gap-4">
                                <img src={homecard1} className="card-img-top mb-2" alt="..." />
                                <h4 className="badge badge-primary">Technology</h4>
                                <h3 className="card-title">
                                    How Emerging Technologies Are Transforming Everyday Life
                                </h3>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex gap-2 justify-content-between align-items-center mt-auto">
                                    <div className="d-flex gap-2 justify-content-between align-items-center">
                                        <img src={autherCard1} alt="Auther" />
                                        <span className>Tracey Wilson</span>
                                    </div>
                                    <span>Date: August 20, 2024</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {posts.length > 0 ? (
                        posts.map((post, index) => (
                            <Link
                                key={index}
                                to={`/blog-post/${post._id}`} // Pass the post ID in the URL
                                className="text-decoration-none">
                                <Card
                                    key={index}
                                    imageSrc={post.image || null} // Replace with actual field name from API
                                    category={post.category?.name ?? null}
                                    title={post.title || null}
                                    authorImage={post.authorImage || null}
                                    authorName={post.authorName || null}
                                    date={post.createdAt || null}
                                />
                            </Link>
                        ))
                    ) : (
                        <div>No posts available</div>
                    )}
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-center p-3">
                <a href="/blog">
                    <button type="button" className="btn btn-outline-secondary white border border-1 border-dark" >
                        View All Post
                    </button>
                </a>
            </div>
        </div >

    )
}

export default PostCards