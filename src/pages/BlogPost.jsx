import React from 'react'
import NaveBar from '../components/NaveBar'
import Footer from '../components/Footer'
import Post from '../components/Post'

function BlogPost() {
    return (
        <div className='bg-dark'>
            <div className="container">
                <NaveBar></NaveBar>
                <Post></Post>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default BlogPost