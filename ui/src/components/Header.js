/**
 * `Header` is a functional component that returns a header element.
 * The header contains a heading (h1) with the text passed as a prop.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.text - The text to be displayed in the header.
 * @returns {JSX.Element} A header element with the passed text.
 */
const Header = ({text}) => {
    return (
        <header className='pageHeader'>
        <h1>{text}</h1>
        </header>
    );
}

export default Header;