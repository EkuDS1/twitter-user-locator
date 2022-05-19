import React from "react"; 
/* import Navbar from 'react-bootstrap/Navbar';
 i replaced a tag with Navbar.Brand it worked 
 than but it works now as well with "a" tag
 change if required*/
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';

const Navbar = () =>{
    return(
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a 
                            className="navbar-brand checking" 
                            href="/">
                                LET's  LOCATE
                            </a>
                            <button className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a activeClassName = ' ' 
                                    className="nav-link active" 
                                    aria-current="page" 
                                    href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a activeClassName = ' ' 
                                    className="nav-link" 
                                    href="/service">
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a activeClassName = ' ' 
                                    className="nav-link" 
                                    href="/contact">
                                        Contact
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a activeClassName = ' ' 
                                    className="nav-link"
                                    href="/about">
                                        About
                                    </a>
                                </li>

                            </ul>
                            </div>
                        </div>
                    </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;