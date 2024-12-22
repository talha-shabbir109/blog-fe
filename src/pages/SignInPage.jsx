import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn';
import FooterNavBar from '../components/FooterNavBar';

function SignInPage() {
    const navigate = useNavigate();

    React.useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        if (token) {
            navigate('/admin');
        }
    }, [navigate]); // Sirf navigate ko dependency mein rakhein

    return (
        <div className="bg-dark">
            <SignIn />
            <FooterNavBar />
        </div>
    );
}

export default SignInPage;
