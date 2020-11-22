import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/EnterIcon.png'
import './HomePage.css';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext, AuthProvider } from '../../lib/api-calls/AuthContext';

const HomePage = () => {
    const authContext = useContext(AuthContext);
    const [didLogOut, setDidLogOut] = useState(false);

    const logout = () => {
        authContext.singout()
        window.location.reload();
    }

    if (didLogOut) {
        console.log('logged out');
        return <Redirect to="/" />
    }
    else {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="le" />
                    {authContext.isAuthenticated()
                        ? (<div>
                            <p>Welcome {authContext.authState.userName}</p>
                            <div className="button" onClick={logout}>Log out</div>
                        </div>)
                        : (<Link to="/Login"><div className="button">sign in</div></Link>)}
                </header>
            </div>
        )
    }
}

export default HomePage;