import React, {useState} from 'react';

/**
 * `DropMenu` is a functional component that returns a dropdown menu.
 * Each link is accompanied by a button with a '+' sign.
 * Clicking the '+' button reveals a dropdown menu with subsections.
 *
 * @returns {JSX.Element} A dropdown menu component.
 */
const DropMenu = () => {
    const [isSortingOpen, setIsSortingOpen] = useState(false);
    const [isGraphOpen, setIsGraphOpen] = useState(false);

    const toggleSorting = () => {
        setIsSortingOpen(!isSortingOpen);
    }

    const toggleGraph = () => {
        setIsGraphOpen(!isGraphOpen);
    }

    return (
        <div className="drop-menu">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/sorting">Sorting Algorithms</a>
                    <button className="drop-button" onClick={toggleSorting}>+</button>
                    {isSortingOpen &&
                        <ul className="drop-menu-sub">
                            <li><a href="/sorting/bubble">Bubble Sort</a></li>
                            <li><a href="/sorting/quick">Quick Sort</a></li>
                        </ul>
                    }
                </li>
                <li>
                    <a href="/graph">Graph Algorithms</a>
                    <button className="drop-button" onClick={toggleGraph}>+</button>
                    {isGraphOpen && 
                        <ul className="drop-menu-sub">
                            <li><a href="/graph/dijkstra">Dijkstra's Algorithm</a></li>
                            <li><a href="/graph/kruskal">Kruskal's Algorithm</a></li>
                        </ul>
                    }
                </li>
            </ul>
        </div>
    );
}

export default DropMenu;