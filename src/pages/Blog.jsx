import React from 'react'
import NaveBar from '../components/NaveBar'
import Footer from '../components/Footer'
import BreadCrumb from '../components/BreadCrumb'
import AdBlock from '../components/AdBlock'
import PostCards from '../components/PostCards'

function Blog() {
    return (
        <>
            <div className='bg-dark'>
                <div className="container">
                    <NaveBar></NaveBar>
                    <BreadCrumb />
                    <PostCards></PostCards>
                    <AdBlock></AdBlock>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Blog

