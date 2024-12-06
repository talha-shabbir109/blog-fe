import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn'
import FooterNavBar from '../components/FooterNavBar'

function SignInPage() {
    const navigate = useNavigate();

    const token = sessionStorage.getItem('authToken');

    // Redirect to /admin if token exists
    React.useEffect(() => {
        if (token) {
            navigate('/admin');
        }
    }, [token, navigate]);

    return (
        <div className='bg-dark'>
            <SignIn />
            <FooterNavBar />
        </div>
    );
}

export default SignInPage;
