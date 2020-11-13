import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { useStateValue } from '../StateProvider';
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { auth } from '../firebase'


function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const [{ basket, user }] = useStateValue();
    console.log("basket", basket)

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Beach Resort" />
                    </Link>
                    <button type="button" className="nav-btn" onClick={() => setIsOpen(!isOpen)}>
                        <BsFillGrid3X2GapFill className="nav-icon" />
                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Rooms</Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <div onClick={login} className="header__option">
                                <span className="header__optionLineOne">Hello, {user?.email}</span>
                                <span className="header__optionLineTwo">{user ? '  Sign Out' : 'Sign In'}</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/checkout" className="header__link">
                            <div className="header__optionBasket">
                                <ShoppingBasketIcon />
                                <span className="header__optionLineTwo header__basketCount"> {basket?.length} </span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar;

