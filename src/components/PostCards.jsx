import React from 'react'
import { autherCard1, autherCard2, autherCard3, homecard1, homecard2, homecard3 } from '../components/Images'

function PostCards() {
    return (
        <div>
            <div className="text-white p-2">
                <h2>Latest Post</h2>
            </div>
            <div className="d-grid gap-5 my-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
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
                    </div>
                    <div className="col">
                        <div className="card h-100 card-design text-white border border-1 border-dark">
                            <div className="card-body rounded-3 gap-4">
                                <img src={homecard2} className="card-img-top mb-2" alt="..." />
                                <h4 className="badge badge-primary">Technology</h4>
                                <h3 className="card-title">
                                    How Emerging Technologies Are Transforming Everyday Life
                                </h3>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex gap-2 justify-content-between align-items-center mt-auto">
                                    <div className="d-flex gap-2 justify-content-between align-items-center">
                                        <img src={autherCard2} alt="Auther" />
                                        <span className>Jason Francisco</span>
                                    </div>
                                    <span>Date: August 20, 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-design text-white border border-1 border-dark">
                            <div className="card-body rounded-3 gap-4">
                                <img src={homecard3} className="card-img-top mb-2" alt="..." />
                                <h4 className="badge badge-primary">Technology</h4>
                                <h3 className="card-title">
                                    How Emerging Technologies Are Transforming Everyday Life
                                </h3>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex gap-2 justify-content-between align-items-center mt-auto">
                                    <div className="d-flex gap-2 justify-content-between align-items-center">
                                        <img src={autherCard3} alt="Auther" />
                                        <span className>Elizabeth Slavin</span>
                                    </div>
                                    <span>Date: August 20, 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-center p-3">
                <a href="/blog">
                <button type="button" className="btn btn-outline-secondary white border border-1 border-dark" >
                    View All Post
                </button>
                </a>
            </div>
        </div>

    )
}

export default PostCards