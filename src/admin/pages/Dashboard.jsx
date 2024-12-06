import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../layouts/SideBar';
import AllPostPage from './AllPostPage'
import HeaderDashboard from '../layouts/HeaderDashboard';


function Dashboard() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      navigate('/sign-in'); // Redirect if not authenticated
    } else {
      setLoading(false); // Token exists, stop loading
    }
  }, [navigate]);

  if (loading) {

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#000',
          color: '#fff',
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  // <div className="col py-3 text-white"></div>

  return (
    <>
      <div className="col py-3 text-white">
        <h1>
          <h3>Welcome to Meta Blog</h3>
          <p className="lead">
            Meta Blog is a dynamic and user-friendly platform designed to create, manage, and share blogs seamlessly. Whether you're a seasoned blogger or just starting out, Meta Blog offers a clean, modern dashboard to easily write, edit, and publish content. With features like real-time editing, post management, and a simple user interface, Meta Blog is your go-to solution for blogging with ease and efficiency. It’s perfect for both personal bloggers and teams looking to collaborate and share content effortlessly.
          </p>
        </h1>
      </div>
    </>
  );
}

export default Dashboard

