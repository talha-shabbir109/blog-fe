import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import HeaderDashboard from "./HeaderDashboard";
import AllPostPage from '../pages/AllPostPage'

function AdminLayout() {
    const location = useLocation(); // Get the current location

    return (
        <>
            <div className="bg-dark">
                <HeaderDashboard></HeaderDashboard>
            </div>
            <div className="container-fluid bg-dark">
                <div className="d-flex ">
                    <SideBar></SideBar>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default AdminLayout;