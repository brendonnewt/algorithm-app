import React, {useState} from 'react';
import '../assets/styles/DropMenu.css';

/**
 * @file DropMenu.js
 * 
 * This component is responsible for rendering the drop menu in the UI.
 * 
 * The DropMenu component takes in one prop:
 * - isOpen: A boolean to determine if the drop menu is open
 * 
 * The component returns a div element containing a list of links to the sorting and graphing algorithms.
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
        // Add a div element with the class name "drop-menu" and a list of links to the sorting and graphing algorithms
        <div className={`drop-menu ${isOpen ? 'open' : ''}`}>
            <ul>
                <li>
                    <a className="homeLink" href="/">Home</a>
                </li>
                <li>
                    <button onClick={toggleSorting}>Sorting Algorithms</button>
                    <ul className={`drop-menu-sub ${isSortingOpen ? 'open' : ''}`}>
                        <li><a href="/sorting/bubblesort">Bubble Sort</a></li>
                        <li><a href="/sorting/selectionsort">Selection Sort</a></li>
                        <li><a href="/sorting/insertionsort">Insertion Sort</a></li>
                        <li><a href="/sorting/quicksort">Quick Sort</a></li>
                        <li><a href="/sorting/mergesort">Merge Sort</a></li>
                        <li><a href="/sorting/heapsort">Heap Sort</a></li>
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