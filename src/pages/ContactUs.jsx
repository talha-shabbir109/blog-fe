import React from 'react'
import NaveBar from '../components/NaveBar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

function ContactUs() {
  return (
    <>
      <div className='bg-dark'>
        <div className="container">
          <NaveBar></NaveBar>
        </div>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </div>

    </>
  )
}

export default ContactUs
