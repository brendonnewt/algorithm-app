import React, { useState } from 'react';
import buttonIcon from '../assets/images/nav-button-icon.png';
import closeIcon from '../assets/images/close-nav-icon.png';
import DropMenu from './DropMenu';
import '../assets/styles/Nav.css';

/**
 * `DropMenu` is a functional component that returns a dropdown menu.
 * The dropdown menu contains links to the Home, Sorting Algorithms, and Graph Algorithms pages.
 * Each link is accompanied by a button with a '+' sign.
 *
 * @returns {JSX.Element} A dropdown menu component.
 */
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
    <nav className='nav'>
        <button type='button'
        className={`navButton ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}
        onClick={toggleMenu}
        >
            {isMenuOpen ? <img className="close" src={closeIcon} alt='Navigation Close Button Icon' />
            : <img className="open" src={buttonIcon} alt='Navigation Open Button Icon' />}
        </button>
        <DropMenu isOpen={isMenuOpen}/>
    </nav>
    );
}

export default Nav;