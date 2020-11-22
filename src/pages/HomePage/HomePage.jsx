import React, { useEffect, useState } from 'react';
import logo from '../../assets/EnterIcon.png'
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const [userName, setUserName] = useState('');
    
    useEffect(() => {
        setUserName(JSON.parse(localStorage.getItem('curretUser')));
        console.log(userName);
    }, [userName]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="le" />
                <p>
                    Welcome {userName}
                </p>
            </header>
        </div>
    )
}

export default HomePage;