import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import PostData from '../../lib/api-calls/PostLogin';
import LoadingFetch from '../components/Loading';
import LoginDisplay from './LoginDisplay';
import './Login';

const Login = () => {
    const LoadFetch = LoadingFetch(LoginDisplay);
    const [appState, setAppState] = useState({
        result: null,
        isLoading: true,
    });

    useEffect(() => {
        setAppState({ isLoading: true });
        PostData("x", "x").then(data => {
            setAppState({ result: data, isLoading: false });
        })
    }, []);

    return (
        <div className="container">
            <LoadFetch isLoading={appState.isLoading} user={appState.result} />
        </div>
    )
}

export default Login;