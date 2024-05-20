import React from 'react';
import buttonIcon from '../assets/images/nav-button-icon.png';

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