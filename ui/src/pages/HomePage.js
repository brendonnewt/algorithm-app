import React from 'react';
import '../assets/styles/HomePage.css';

/**
 * @file HomePage.js
 * 
 * This component is responsible for rendering the home page in the UI.
 * 
 * The HomePage component returns a div element containing the main and footer elements.
 */
const HomePage = () => {
    return (
        <div className="HomePage">
            <div className="header">
                <h1>Welcome to the Sorting Algorithm Visualizer!</h1>
                <p>
                    This application visualizes the steps of various sorting algorithms.
                    To get started, click on one of the algorithms below to see how it works.
                    To see the full list of algorithms, click on the menu icon in the top left corner.
                </p>
            </div>
            <h2>Sorting Algorithms</h2>
            <div className="algorithmList">
                <ul>
                    <li>
                        <a className="algorithmCard" href="/sorting/bubblesort">Bubble Sort</a>
                    </li>
                    <li>
                        <a className="algorithmCard" href="/sorting/selectionsort">Selection Sort</a>
                    </li>
                    <li>
                        <a className="algorithmCard" href="/sorting/insertionsort">Insertion Sort</a>
                    </li>
                    {/* Add more list items as needed for other algorithms */}
                </ul>
            </div>
            <div className="infoPanel">
                <h2>If you want to learn more about this project, the full documentation and source code for the implementations are available on github!</h2>
                <a href="https://github.com/brendonnewt/algorithm-visualizer">
                    <img className="logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" />
                </a>
            </div>
            <footer className="homeFooter">
                <p>
                    Created by <a href="https://github.com/brendonnewt">Brendon Newton</a>
                </p>
            </footer>
        </div>
    );
}

export default HomePage;