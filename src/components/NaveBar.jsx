import React from "react";
import { logo, searchOutline } from "./Images";
import InputField from '../shared/InputField';

const NaveBar = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
          {/* Logo and brand */}
          <div className="d-flex gap-2">
            <img className="brand-logo" src={logo} alt="Brand Logo" />
            <a className="navbar-brand text-white" href="/">Meta <span className="fw-bold">Blog</span></a>
          </div>

          {/* Navbar toggler for mobile screens */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          {/* Centered Navigation links */}
          <div className="collapse navbar-collapse d-flex justify-content-end p-1" id="navbarSupportedContent">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="text-white nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="text-white nav-link" href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="text-white nav-link" href="/contact-us">Contact</a>
              </li>
            </ul>
          </div>

          {/* Right side buttons (Login, Sign Up, Search, Switch) */}
          <div className="d-flex align-items-center gap-3">
            <div className="position-relative">
              <InputField type="search" placeholder="Search" required />
              <img src={searchOutline} className="position-absolute email-icon" />
            </div>

            {/* Login and Sign Up Buttons */}
            <div className="d-flex gap-3 flex-wrap">
              <a href="/sign-in" className="btn btn-primary btn-lg" style={{ width: '80px', height: '36px' }}>Login</a>
              <a href="/sign-up" className="btn btn-light" style={{ width: '90px', height: '36px' }}>Sign-Up</a>
            </div>

            {/* Switch Button */}
            <div className="form-check form-switch">
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                <span className="slider round" />
              </label>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NaveBar;
