import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import PostData from '../../lib/api-calls/PostLogin';
import LoadingFetch from '../components/Loading';
import LoginDisplay from './LoginDisplay';
import { Link, Redirect } from 'react-router-dom';
import LoadingImage from '../../assets/bars.svg';
import './Login.css';

const Login = () => {
    const LoadFetch = LoadingFetch(LoginDisplay);
    const [appState, setAppState] = useState({
        result: null,
        isLoading: true
    });
    const [redirect, setRedirect] = useState({
        redirectHome: false
    });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loadingState, setLoadingState] = useState({
        isLoading: false
    });

    // useEffect(() => {
    //     setAppState({ isLoading: true });
    //     PostData("x", "x").then(data => {
    //         setAppState({ result: data, isLoading: false });
    //     })
    // }, []);

    const SendRequest = () => {
        console.log(username);
        console.log(password);
        setLoadingState({ isLoading: true });

        //POST
        PostData(username, password).then(data => {
            console.log(data);
            setLoadingState({isLoading: false });
            //setRedirect({ redirectHome: true });
        })

        //Redirect to home if success 
        // setRedirect({ redirectHome: true })
    }

    if (redirect.redirectHome) return <Redirect to="/" />
    if (!loadingState.isLoading) {
        return (
            <div className="container">
                {/* <LoadFetch isLoading={appState.isLoading} user={appState.result} /> */}
                <div className="form-container">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/2317/2317407.svg" style={lock} />
                    <input onChange={event => setUsername({ username: event.target.value })} className="input-blackbg" type="text'" placeholder="Username" spellCheck="false" />
                    <input onChange={event => setPassword({ password: event.target.value })} className="input-blackbg" type="password" placeholder="Password" />
                    <div className="options">
                        <div onClick={SendRequest} className="button-login"><i class="fas fa-sign-in-alt"></i> Login</div>
                        <Link to="Register" className="button-login">
                            <i class="fa fa-user" aria-hidden="true"></i> Register
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return <img src={LoadingImage} />
    }

}

export default Login;

const lock = {
    width: '50%',
    height: '50%',
    margin: '1em'
}