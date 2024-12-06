import React from 'react'
import NaveBar from '../components/NaveBar'
import Footer from '../components/Footer'
import Post from '../components/Post'
import { Route, Link, useParams } from 'react-router-dom';

function BlogPost() {

    let { postId } = useParams();
    return (
        <div className='bg-dark'>
            <div className="container">
                <NaveBar></NaveBar>
                {console.log("this is useoaram", postId)}
                <Post postId={postId}></Post>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default BlogPost