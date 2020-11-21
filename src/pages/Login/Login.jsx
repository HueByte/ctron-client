import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import PostData from '../../lib/api-calls/PostLogin';
import LoadingFetch from '../components/Loading';
import LoginDisplay from './LoginDisplay';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const LoadFetch = LoadingFetch(LoginDisplay);
    const [appState, setAppState] = useState({
        result: null,
        isLoading: true,
    });

    // useEffect(() => {
    //     setAppState({ isLoading: true });
    //     PostData("x", "x").then(data => {
    //         setAppState({ result: data, isLoading: false });
    //     })
    // }, []);

    return (
        <div className="container">
            {/* <LoadFetch isLoading={appState.isLoading} user={appState.result} /> */}
            <div className="form-container">
                <img src="https://www.flaticon.com/svg/static/icons/svg/2317/2317407.svg" style={lock}/>
                <input className="input-blackbg" type="text'" placeholder="Username" spellCheck="false"/>
                <input className="input-blackbg" type="password" placeholder="Password" />
                <div className="options">
                    <div className="button-login"><i class="fas fa-sign-in-alt"></i> Login</div>
                    <Link to="Register" className="button-login">
                        <i class="fa fa-user" aria-hidden="true"></i> Register
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;

const lock = {
    width: '50%',
    height: '50%',
    margin: '1em'
}