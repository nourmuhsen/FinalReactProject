import { Link, NavLink } from "react-router-dom"
import reactLogo from '../Assets/react.svg'
import "./Header.css"

const Header = () => {
    return (
        <header className="d-flex flex-row align-items-center p-3 
                  px-4 mb-3 border-bottom border-primary header">
            <div className="d-flex flex-row align-items-center my-2 me-auto me-auto">
                <img className="reactLogo me-2"
                    src={reactLogo} alt="React Logo"
                />
                <h5 className="fs-4 m-0 text-white">
                    <NavLink className="Link" to="/">GymLog</NavLink>
                </h5>
            </div>

            <nav className="my-2  me-3">
                <NavLink className="p-2 Link" to="/create-routine">Create a Routine</NavLink>    
                <NavLink className="p-2 Link" to="/current-routine">Current Routine</NavLink>
                <NavLink className="p-2 Link" to="/my-routines">My Routines</NavLink>
                <NavLink className="p-2 Link" to="/support">Support us</NavLink>
            </nav>
        </header>
    )
}

export default Header
