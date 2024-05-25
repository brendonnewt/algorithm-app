import React, { useState } from 'react';
import buttonIcon from '../assets/images/nav-button-icon.png';
import closeIcon from '../assets/images/close-nav-icon.png';
import DropMenu from './DropMenu';
import '../assets/styles/Nav.css';

/**
 * @file Nav.js
 * 
 * This component is responsible for rendering the navigation bar in the UI.
 * 
 * The Nav component contains a button to toggle the drop menu.
 * 
 * Component returns a navigation bar component that contains a button to toggle the drop menu.
 */
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
    <nav className='nav'>
        <button type='button'
        // Add a button element with the class name "navButton" and an onClick event handler to toggle the drop menu
        className={`navButton ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}
        onClick={toggleMenu}
        >
            {/* If the menu is open it makes the button the hamburger, and an 'x' if it's closed */}
            {isMenuOpen ? <img className="close" src={closeIcon} alt='Navigation Close Button Icon' />
            : <img className="open" src={buttonIcon} alt='Navigation Open Button Icon' />}
        </button>
        <DropMenu isOpen={isMenuOpen}/>
    </nav>
    );
}

export default Nav;