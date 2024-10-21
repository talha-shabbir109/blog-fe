import React from 'react'
import NaveBar from '../components/NaveBar'
import Authorcard from '../components/Authorcard'
import PostCards from '../components/PostCards'
import Footer from '../components/Footer'

function Author() {
    return (
        <div>
            <div className="bg-dark">
                <div className="container">
                <NaveBar></NaveBar>
                <Authorcard></Authorcard>
                <PostCards></PostCards>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Author
