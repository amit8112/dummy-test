import React from 'react'
import { Link } from "react-router-dom";


function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <Link className="navbar-brand" to="/">
                    ProcodeBox
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact'>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/service'>
                                Service
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="faq.html">
                                FAQ
                            </a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownBlog"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Blog
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownBlog"
                            >
                                <li>
                                    <a className="dropdown-item" href="blog-home.html">
                                        Blog Home
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="blog-post.html">
                                        Blog Post
                                    </a>
                                </li>
                            </ul>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownPortfolio"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Blog
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownPortfolio"
                            >
                                <li>
                                    <a className="dropdown-item" href="portfolio-overview.html">
                                        Blog Post
                                    </a>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header