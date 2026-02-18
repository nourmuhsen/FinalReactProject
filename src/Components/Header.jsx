import { useState } from 'react';
import { NavLink } from "react-router-dom";
import reactLogo from '../Assets/react.svg'; // Fixed capitalization
import "./Header.css";

const Header = () => {
    // State to toggle the hamburger menu
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const closeMenu = () => setIsNavCollapsed(true);

    return (
        // navbar-expand-md: Menu shows fully on Medium screens (tablets) and up
        // navbar-dark: Tells Bootstrap we have a dark background, so text/icons should be white
        <nav className="navbar navbar-expand-md navbar-dark border-bottom border-primary header px-4">
            <div className="container-fluid">
                
                {/* Brand / Logo Section */}
                <div className="navbar-brand d-flex align-items-center">
                    <img className="reactLogo me-2" src={reactLogo} alt="React Logo" />
                    <h5 className="fs-4 m-0">
                        <NavLink className="Link" to="/" onClick={closeMenu}>GymLog</NavLink>
                    </h5>
                </div>

                {/* Hamburger Button (Visible only on mobile) */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={handleNavCollapse}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Menu Links */}
                {/* The 'collapse' class hides the menu when isNavCollapsed is true */}
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <div className="navbar-nav ms-auto text-center">
                        <NavLink className="nav-link Link p-2" to="/create-routine" onClick={closeMenu}>
                            Create a Routine
                        </NavLink>    
                        <NavLink className="nav-link Link p-2" to="/current-routine" onClick={closeMenu}>
                            Current Routine
                        </NavLink>
                        <NavLink className="nav-link Link p-2" to="/my-routines" onClick={closeMenu}>
                            My Routines
                        </NavLink>
                        <NavLink className="nav-link Link p-2" to="/support" onClick={closeMenu}>
                            Support us
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header; 
