import { autherCard1, blogImage1, blogImage2 } from './Images'
import AdBlock from './AdBlock'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Post(props) {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // http://localhost:8000/api/posts
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/posts/${props.postId}`) // Adjust endpoint if needed

            .then((response) => {
                console.log("response", response.data.post)
                setPost(response.data.post);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching posts:', err);
                setError('Failed to fetch posts');
                setLoading(false);
            });
    }, [props.postId]);

    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || doc.body.innerText || '';
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <div className="bg-dark container text-muted my-5" style={{ width: '50%' }}>
                <div className="d-grid justify-content-center my-3" id="blog-detail-post">
                    <div className="text-white my-5">
                        {console.log("category ----->", post)}
                        <h2 className="fs-6 badge badge-secondary">{post.category.name}</h2>
                        <h1 className="mb-3" style={{ size: '5rem' }}>
                            {post.title}
                        </h1>
                        <div className="d-flex gap-5 align-items-center mt-auto">
                            <div className="d-flex gap-2 justify-content-between align-items-center">
                                <img src={post.authorImage || autherCard1} alt="Author" />
                                <span>{post.author || "Unknown Author"}</span>
                            </div>
                            <span>Date: {post.date || "Unknown Date"}</span>
                        </div>
                    </div>
                    <div id="image-detail-post">
                        <img src={post.image || blogImage1} alt="Blog Post" />
                    </div>
                    <div>
                        {stripHtmlTags(post.postBody) || 'N/A'}
                    </div>
                    <AdBlock></AdBlock>

                </div>
            </div>
        </div>

    )
}

export default Post
