import React from 'react'
import { facebook, instagram, personLogo, twitter, youtube } from '../components/Images'
import SocailIcons from '../shared/SocailIcons'

function Authorcard() {
    return (
        <div>
            <div>
                {/* heading */}
                <div className="bg-dark-mat my-5">
                    <div className="d-grid gap-4 justify-content-center align-items-center p-5 text-center">
                        <div className="d-flex gap-3 align-items-center justify-content-center">
                            <img src={personLogo} alt="Auther" />
                            <div className="d-grid align-items-start text-start">
                                <div>
                                    <h5 className="m-0 text-white">Jonathan Doe</h5>
                                </div>
                                <span className="text-muted">Collaborator &amp; Editor</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="w-50">
                                <p className="text-muted">
                                    Meet Jonathan Doe, a passionate writer and blogger with a
                                    love for technology and travel. Jonathan holds a degree in
                                    Computer Science and has spent years working in the tech
                                    industry, gaining a deep understanding of the impact
                                    technology has on our lives.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex gap-3 justify-content-center ">
                            <SocailIcons src={facebook} href='www.facebook.com' alt='facebook.com'></SocailIcons>
                            <SocailIcons src={twitter} href='www.twitter.com' alt='twitter.com'></SocailIcons>
                            <SocailIcons src={instagram} href='www.instagram.com' alt='instagram.com'></SocailIcons>
                            <SocailIcons src={youtube} href='www.youtube.com' alt='youtube.com'></SocailIcons>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Authorcard
