import React from 'react'
import InputField from '../shared/InputField'

function ContactForm() {
    return (
        <div className="container w-50 ">
            <div className="container justify-content-center my-5 text-white">
                <div className>
                    <h1>Get InTouch</h1>
                    <p>
                        Have a question, comment, or need assistance? Fill out the form
                        below, and our team will get back to you as soon as possible. We're
                        here to help and look forward to hearing from you!
                    </p>
                </div>
                <div className="rounded-3 p-5 border border-1 border-dark m-5  bg-dark-shine ">
                    <form className="row g-3 text-white w-100">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">First Name</label>
                            {/* <input type="text" className="form-control text-muted" id="inputFirstname" placeholder="Jhon" /> */}
                            <InputField type="text" placeholder="John" id="inputEmail"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputLastname" className="form-label  ">Last Name</label>
                            <InputField type="text" placeholder="Carter" id="inputLastName"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <InputField type="email" placeholder="example@gmail.com" id="inputEmail4"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <InputField type="password" placeholder="**********" id="inputPassword4"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <InputField type="text" placeholder="1234 Main St" id="inputAddress"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                            <InputField type="text" placeholder="Apartment, studio, or floor" id="inputAddress2"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <InputField type="text" placeholder="Enter your city" id="inputCity"/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <InputField type="text" placeholder="code" id="inputZip"/>

                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary form-btn">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ContactForm
