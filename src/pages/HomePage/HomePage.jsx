import React from 'react';
import logo from '../../assets/EnterIcon.png'
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="le" />
                <p>
                    Welcome
                </p>
            </header>
        </div>
    )
}

export default HomePage;