import React from 'react'
import NaveBar from '../components/NaveBar'
import Footer from '../components/Footer'
import AdBlock from '../components/AdBlock'
import PostCards from '../components/PostCards'
import { autherCard1 } from '../components/Images'


function Index() {
  return (
    <>
      <NaveBar></NaveBar>
      <div className='bg-dark'>
        <div className="container">
          <div className="mask mb-5">
            {/* banner card */}
            <div className="row">
              <div className="card-group" style={{ maxWidth: '40rem', position: 'relative', left: '5rem', top: '23rem', fontFamily: 'inherit' }}>
                <div className="card card-design text-white border border-1 border-dark">
                  <div className="card-body rounded-3 gap-4">
                    <h2 className="fs-6 badge badge-secondary">Technology</h2>
                    <h1 className="display-6 fw-bolder fs-1">
                      The Impact of Technology on the Workplace: How Technology is
                      Changing
                    </h1>
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
              </div>
            </div>
          </div>
          <div>
            <AdBlock></AdBlock>
            <PostCards></PostCards>
            <AdBlock></AdBlock>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Index
