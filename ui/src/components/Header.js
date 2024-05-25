/**
 * @file Header.js
 * 
 * This component is responsible for rendering the header in the UI.
 * 
 * The Header component takes in one prop:
 * - text: The text to display in the header
 * 
 * The component returns a header element containing the text prop.
 */
const Header = ({text}) => {
    return (
        <header className='pageHeader'>
        <h1>{text}</h1>
        </header>
    );
}

export default Header;