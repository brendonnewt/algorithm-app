import React, { useState } from 'react';
import buttonIcon from '../assets/images/nav-button-icon.png';
import DropMenu from './DropMenu';

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
        <button type='button' className='navButton' onClick={toggleMenu}>
            <img src={buttonIcon} alt='Navigation Button Icon' />
        </button>
        {isMenuOpen && <DropMenu />}
    </nav>
    );
}

export default Nav;