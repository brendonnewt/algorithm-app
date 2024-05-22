import React, {useState} from 'react';
import '../assets/styles/DropMenu.css';

/**
 * `DropMenu` is a functional component that returns a dropdown menu.
 * Each link is accompanied by a button with a '+' sign.
 * Clicking the '+' button reveals a dropdown menu with subsections.
 *
 * @returns {JSX.Element} A dropdown menu component.
 */
const DropMenu = ({isOpen}) => {
    const [isSortingOpen, setIsSortingOpen] = useState(false);
    const [isGraphOpen, setIsGraphOpen] = useState(false);

    const toggleSorting = () => {
        setIsSortingOpen(!isSortingOpen);
    }

    const toggleGraph = () => {
        setIsGraphOpen(!isGraphOpen);
    }

    return (
        <div className={`drop-menu ${isOpen ? 'open' : ''}`}>
            <ul>
                <li>
                    <a className="homeLink" href="/">Home</a>
                </li>
                <li>
                    <button onClick={toggleSorting}>Sorting Algorithms</button>
                    <ul className={`drop-menu-sub ${isSortingOpen ? 'open' : ''}`}>
                        <li><a href="/sorting/bubblesort">Bubble Sort</a></li>
                        <li><a href="/sorting/quicksort">Quick Sort</a></li>
                    </ul>
                </li>
                <li>
                    <button onClick={toggleGraph}>Graphing Algorithms</button>
                    <ul className={`drop-menu-sub ${isGraphOpen ? 'open' : ''}`}>
                        <li><a href="/graph/dijkstra">Dijkstra's Algorithm</a></li>
                        <li><a href="/graph/kruskal">Kruskal's Algorithm</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default DropMenu;