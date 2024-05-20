import React from 'react';
import buttonIcon from '../assets/images/nav-button-icon.png';

/**
 * `DropMenu` is a functional component that returns a dropdown menu.
 * The dropdown menu contains links to the Home, Sorting Algorithms, and Graph Algorithms pages.
 * Each link is accompanied by a button with a '+' sign.
 *
 * @returns {JSX.Element} A dropdown menu component.
 */
const Nav = () => {
    return (
    <nav className='nav'>
        <button type='button' className='navButton'>
            <img src={buttonIcon} alt='Navigation Button Icon' />
        </button>
    </nav>
    );
}

export default Nav;