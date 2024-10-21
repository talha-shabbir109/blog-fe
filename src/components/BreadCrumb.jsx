import React from 'react'

function BreadCrumb() {
    return (
        <div>
            <div className="d-grid gap-3 justify-content-center my-5 ">
                <h1 className="text-white">Blog</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active text-white" aria-current="page">Blog</li>
                    </ol>
                </nav>
            </div>
        </div>

    )
}

export default BreadCrumb