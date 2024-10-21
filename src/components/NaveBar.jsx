import React from "react";
import { logo, searchOutline } from "./Images";
import InputField from '../shared/InputField'

const NaveBar = () => {
  return (
    <div class="bg-dark">
      <div class="container">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
          <div className="d-flex gap-2">
            <img className="brand-logo" src={logo} alt="Brand Logo" />
            <a className="navbar-brand text-white" href="/">Meta <span className="fw-bold">Blog</span></a>
          </div>
          <div className="d-flex">
            <div className="px-5 mx-5">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-4 mb-lg-0 ml-4 gap-4">
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
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="position-relative">
                <InputField type="search" placeholder="Search" required ></InputField>
                <img
                  src={searchOutline}
                  className="position-absolute email-icon"
                />
              </div>
              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                  <span className="slider round" />
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NaveBar;
