import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logo } from '../../components/Images';

function HeaderDashboard() {
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleSignOut = () => {
        // Clear session storage
        sessionStorage.removeItem('authToken');
        // Redirect to SignInPage
        navigate('/sign-in');
    };

    return (
        <header className="d-flex align-items-center justify-content-between p-1 text-white bg-dark-mat border-bottom bg-dark text-light border-secondary">
            <div className="d-flex align-items-center gap-2 m-3">
                <img src={logo} alt="Logo" style={{ height: '40px', width: 'auto' }} />
                <a href="/" className="text-decoration-none text-white">
                    <span className="fs-5 d-none d-sm-inline">Meta Blog</span>
                </a>
            </div>
            <div className="dropdown my-1 align-items-center me-2">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={logo} alt="hugenerd" width={30} height={30} className="rounded-circle" />
                    <span className="d-none d-sm-inline mx-1">Admin</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><button className="dropdown-item" onClick={handleSignOut}>
                        Sign out
                    </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default HeaderDashboard;