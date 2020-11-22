import React, { useEffect, useState } from 'react';
import logo from '../../assets/EnterIcon.png'
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const userData = JSON.parse(localStorage.getItem('currentUser')) || {};
    const [user, setUser] = useState(userData);
    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('currentUser')));
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="le" />
                <p>
                    Welcome {user.userName}
                </p>
            </header>
        </div>
    )
}

export default HomePage;