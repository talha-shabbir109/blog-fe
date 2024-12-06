import React from 'react'
import { logo, } from "./Images";

function FooterNavBar() {
    return (
        <>
            <div class="bg-dark-shine">
                <div class="container">
                    <footer className="d-grid gap-1 align-items-center  ">
                        <hr className="none" />
                        <div className="row text-white py-1">
                            <div className="col-4 d-flex gap-2 align-items-center">
                                <div>
                                    <img className="brand-logo" src={logo} alt="Brand Logo" />
                                </div>
                                <div className="d-grid">
                                    <div>
                                        <a className="navbar-brand text-white" href="/">Meta <span className="fw-bold">Blog</span></a>
                                    </div>
                                    <div>
                                        © JS Template 2023.
                                        <span className="text-muted">All Rights Reserved.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 d-flex justify-content-end align-items-center gap-4 text-muted">
                                <div>Terms of Use</div>
                                <div>Privacy Policy</div>
                                <div>Cookie Policy</div>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>
        </>
    )
}

export default FooterNavBar

