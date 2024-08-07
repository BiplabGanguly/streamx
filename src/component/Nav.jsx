import React, { useEffect, useState } from 'react'
import logo from '../assets/logo2.png'
import menu from '../assets/Menu.png'
import { Link } from 'react-router-dom'
function Nav({ useremail }) {

    const signout_function = () => {
        sessionStorage.clear();
        window.location.reload();
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="nav-banner-img">
                        <img src={logo} alt="logo" className='nav-logo-image' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><img src={menu} className='menu-bar' alt="menubar" /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Movies</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">Shows</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Series</a>
                            </li>
                        </ul>
                        <div className="d-flex login-box">
                            {
                                useremail ? <div class="dropdown nav-drop">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {useremail}
                                    </button>
                                    <ul class="dropdown-menu nav-drop-menu">
                                        <li><a class="dropdown-item nav-drop-item" onClick={signout_function}>Signout</a></li>
                                    </ul>
                                </div> : <Link to="/signin" type='button' className='btn btn-outline-light login-nav-btn'>login / register</Link>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav