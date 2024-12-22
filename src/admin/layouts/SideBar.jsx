import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
    const [activeLink, setActiveLink] = useState("/admin");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark-mat">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <ul
                    className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start flex-wrap"
                    id="menu"
                >
                    <li className="nav-item">
                        {/* Dashboard */}
                        <Link
                            to="/admin"
                            className={`nav-link align-middle p-2 ${activeLink === "/admin" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/admin")}
                        >
                            <i className="bi bi-speedometer2" />{" "}
                            <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </Link>

                        {/* Posts Dropdown */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fs-4 bi-card-heading me-2" />
                                Posts
                            </a>
                            <ul className="dropdown-menu bg-dark-shine" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/admin/posts/new">Add New</Link></li>
                                <li><Link className="dropdown-item" to="/admin/posts">All Posts</Link></li>
                            </ul>
                        </li>

                        {/* Inbox */}
                        <Link
                            to="/inbox"
                            className={`nav-link align-middle p-2 ${activeLink === "/inbox" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/inbox")}
                        >
                            <i className="bi bi-inbox-fill" />{" "}
                            <span className="ms-1 d-none d-sm-inline">Inbox</span>
                        </Link>

                        {/* Accounts */}
                        <Link
                            to="/accounts"
                            className={`nav-link align-middle p-2 ${activeLink === "/accounts" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/accounts")}
                        >
                            <i className="bi bi-person-fill-gear" />{" "}
                            <span className="ms-1 d-none d-sm-inline">Accounts</span>
                        </Link>

                    </li>

                    {/* Categories Dropdown */}
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-folder-fill me-2" />
                            Categories
                        </a>
                        <ul className="dropdown-menu bg-dark-shine" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/admin/categories/new">Add New</Link></li>
                            <li><Link className="dropdown-item" to="/admin/categories">All Categories</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
