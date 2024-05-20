/**
 * `DropMenu` is a functional component that returns a dropdown menu.
 * The dropdown menu contains links to the Home, Sorting Algorithms, and Graph Algorithms pages.
 * Each link is accompanied by a button with a '+' sign.
 *
 * @returns {JSX.Element} A dropdown menu component.
 */
const DropMenu = () => {
    return (
        <div className="drop-menu">
            <ul>
                <li>
                    <a href="/">Home</a>
                    <button className="drop-button">+</button>
                </li>
                <li>
                    <a href="/sorting">Sorting Algorithms</a>
                    <button className="drop-button">+</button>
                </li>
                <li>
                    <a href="/graph">Graph Algorithms</a>
                    <button className="drop-button">+</button>
                </li>
            </ul>
        </div>
    );
}

export default DropMenu;