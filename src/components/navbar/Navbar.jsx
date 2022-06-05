import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../navbar/Navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to="/">
                        <img className={styles.weblogo} src='https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/MensData">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/WomensData">Women</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">New Arrival</a>
                            </li>
                        </ul>
                        <span className={styles.navbarText}>
                            <Link className="nav-link active" to="/Signup">Sign Up</Link>
                            <Link className="nav-link active" to="/Cart">
                                <i class="fa-solid fa-bag-shopping"></i>
                            </Link>
                            <Link className="nav-link active" to="/Contact">Contact Us</Link>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;