import React from 'react'
import SignUp from '../components/SignUp'
import Footer from '../components/Footer'
import NaveBar from '../components/NaveBar'



function SignUpPage() {
    return (
        <>
            <div className='bg-dark'>
                <NaveBar></NaveBar>
                <div className='my-5'>
                    <SignUp></SignUp>
                </div>
                <Footer></Footer>
            </div>

        </>
    )
}

export default SignUpPage