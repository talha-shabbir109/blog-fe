import React from 'react'
import { logo, mail } from "./Images";
import InputField from '../shared/InputField'

function Footer() {
    return (
        <>
            <div class="bg-dark-shine">
                <div class="container">
                    <footer className="d-grid gap-1 align-items-center  ">
                        <div className="row pt-4">
                            <div className="col-3 text-white">
                                <div>
                                    <h4>About</h4>
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam
                                    </p>
                                </div>
                                <div>
                                    <div>Email: <span className="text-muted">admin@gmail.com</span></div>
                                    <div>Phone: <span className="text-muted">+92-3314487050</span></div>
                                </div>
                            </div>
                            <div className="col-5 text-white d-flex justify-content-around">
                                <div>
                                    <h5>Quick Link</h5>
                                    <ul className="nav-flex-column list-unstyled">
                                        <li className="nav-item mb-2">
                                            <a href="/" className="nav-link p-0 text-muted">Home</a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a href="/blog" className="nav-link p-0 text-muted">Blog</a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a href="/contact-us" className="nav-link p-0 text-muted">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5>Category</h5>
                                    <ul className="nav-flex-column list-unstyled">
                                        <li className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted">Lifestyle</a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted">Technology</a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted">Travel</a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted">Business</a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted">Economy</a>
                                        </li>
                                        <li className="nav-item mb-2">
                                            <a href="#" className="nav-link p-0 text-muted">Sports</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card bg-dark-mat newsletter-card p-4 rounded-3">
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-white">Weekly Newsletter</h5>
                                        <p className="card-text text-muted">
                                            Get blog articles and offers via email
                                        </p>
                                        <form className="mt-4">
                                            <div className="d-grid gap-2 mx-auto">
                                                <div className="position-relative">
                                                    <InputField type="email" placeholder="Your Email" required></InputField>
                                                    <img
                                                        src={mail}
                                                        className="position-absolute email-icon"
                                                    />
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-lg">
                                                    Subscribe
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <hr className="text-muted" />
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

export default Footer

