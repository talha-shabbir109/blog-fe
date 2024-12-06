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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <div className="bg-dark container text-muted my-5" style={{ width: '50%' }}>
                <div className="d-grid justify-content-center my-3" id="blog-detail-post">
                    <div className="text-white my-5">
                        {console.log("category ----->",)}
                        <h2 className="fs-6 badge badge-secondary">{post.category['name'] || "Technology"}</h2>
                        <h1 className="mb-3" style={{ size: '5rem' }}>
                            {post.title}
                            {console.log("props -------------->", post)}
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
                        {post.content && post.content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <blockquote>
                        <p>
                            “ Traveling can expose you to new environments and potential health
                            risks, so it's crucial to take precautions to stay safe and healthy.
                            ”
                        </p>
                    </blockquote>
                    <div id="image-detail-post">
                        <img src={blogImage2} alt="" />
                    </div>
                    <AdBlock></AdBlock>
                    <div>
                        <h2>Plan Your Itinerary</h2>
                        <p>
                            Packing can be a daunting task, but with some careful planning and
                            smart choices, you can pack light and efficiently. Start by making a
                            packing list and sticking to it, focusing on versatile and
                            comfortable clothing that can be mixed and matched. Invest in
                            quality luggage and packing organizers to maximize space and
                            minimize wrinkles.
                        </p>
                        <h2>Stay Safe and Healthy</h2>
                        <p>
                            Traveling can expose you to new environments and potential health
                            risks, so it's crucial to take precautions to stay safe and healthy.
                            This includes researching any required vaccinations or medications,
                            staying hydrated, washing your hands frequently, and using sunscreen
                            and insect repellent. It's also essential to keep your valuables
                            safe and secure and to be aware of your surroundings at all times.
                        </p>
                        <h2>Immerse Yourself in the Local Culture</h2>
                        <p>
                            One of the most rewarding aspects of traveling is immersing yourself
                            in the local culture and customs. This includes trying local
                            cuisine, attending cultural events and festivals, and interacting
                            with locals. Learning a few phrases in the local language can also
                            go a long way in making connections and showing respect.
                        </p>
                        <h2>Capture Memories</h2>
                        <p>
                            Finally, don't forget to capture memories of your journey. Whether
                            it's through photographs, journaling, or souvenirs, preserving the
                            moments and experiences of your travels can bring joy and nostalgia
                            for years to come. However, it's also essential to be present in the
                            moment and not let technology distract you from the beauty of your
                            surroundings.
                        </p>
                        <h2>Conclusion:</h2>
                        <p>
                            Traveling is an art form that requires a blend of planning,
                            preparation, and spontaneity. By following these tips and tricks,
                            you can make the most of your journey and create memories that last
                            a lifetime. So pack your bags, embrace the adventure, and enjoy the
                            ride.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post
