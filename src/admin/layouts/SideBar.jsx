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
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark-mat ">
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

                        {/* All Posts */}
                        <Link
                            to="/admin/posts"
                            className={`nav-link align-middle p-2 ${activeLink === "/admin/posts" ? "active" : ""}`}
                            onClick={() => handleLinkClick("/admin/posts")}
                        >
                            <i className="fs-4 bi-card-heading" />{" "}
                            <span className="ms-1 d-none d-sm-inline">All Posts</span>
                        </Link>

                        {/* Categories */}
                        <div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
                            <Link
                                to="/admin/categories"
                                className={`d-flex align-items-center nav-link dropdown-toggle ${activeLink.includes("/admin/categories") ? "active" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleDropdown();
                                }}
                                aria-expanded={isDropdownOpen ? "true" : "false"}
                                id="categoriesDropdown"
                                data-bs-toggle="dropdown"
                            >
                                <i className="bi bi-folder-fill"></i>
                                <span className="ms-1 d-none d-sm-inline">Categories</span>
                            </Link>
                            <ul
                                className={`dropdown-menu dropdown-menu-dark text-small shadow ${isDropdownOpen ? "show" : ""
                                    }`}
                                aria-labelledby="categoriesDropdown"
                            >
                                <li>
                                    <Link
                                        className={`dropdown-item ${activeLink === "/admin/categories" ? "active" : ""}`}
                                        to="/admin/categories"
                                        onClick={() => handleLinkClick("/admin/categories")}
                                    >
                                        All Categories
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`dropdown-item ${activeLink === "/admin/categories/new" ? "active" : ""}`}
                                        to="/admin/categories/new"
                                        onClick={() => handleLinkClick("/admin/categories/new")}
                                    >
                                        Add New
                                    </Link>
                                </li>
                            </ul>
                        </div>

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
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
