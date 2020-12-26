import React, { useContext, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { AuthLogin } from '../../lib/api-calls/Authentication';
import LoadingFetch from '../components/Loading';
import LoginDisplay from './LoginDisplay';
import { Link, Redirect } from 'react-router-dom';
import LoadingImage from '../../assets/bars.svg';
import Popup from 'reactjs-popup';
import { AuthContext } from '../../lib/api-calls/AuthContext';
import './Login.css';

const Login = () => {
    const authContext = useContext(AuthContext);
    const isAuthenticated = authContext;
    const [redirect, setRedirect] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loadingState, setLoadingState] = useState(false);
    
    const [errorModal, setErrorModal] = useState({
        open: false,
        message: ''
    })

    const closeModal = () => setErrorModal({
        open: false,
        message: ''
    });

    const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                SendRequest()
            }
        }

    const SendRequest = () => {
        setLoadingState(true);
        
        //POST
        AuthLogin(username, password)
            .then(data => {
                //check if request returned correct response code
                setLoadingState(false);
                if (data == null || data.status >= 500) {
                    //throw error if code was wrong
                    PromiseRejectionEvent('')
                }
                else return data.json();
            })
            .then(data => {
                if(!data.isSuccess) {
                    setErrorModal({ open: true, message: data.message });
                }
                //upload data to localStorage and redirect to homepage
                else {
                    authContext.setAuthState(data.data);
                    setRedirect(true);
                }
            })
            .catch(() => {
                //show modal on error
                setErrorModal({ open: true, message: 'Something went wrong with logging in' });
            })
    }

    if (authContext.isAuthenticated()) return <Redirect to="/" />;

    if (redirect) return <Redirect to="/" />

    if (!loadingState) {
        return (
            <div className="container">
                <div className="form-container">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/2317/2317407.svg" style={lock} />
                    <input onChange={event => setUsername( event.target.value )} onKeyDown={handleKeyDown} className="input-blackbg" type="text'" placeholder="Username" spellCheck="false" />
                    <input onChange={event => setPassword( event.target.value )} onKeyDown={handleKeyDown} className="input-blackbg" type="password" placeholder="Password" />
                    <div className="options">
                        <div onClick={SendRequest} className="button-login"><i className="fas fa-sign-in-alt"></i> Login</div>
                        <Link to="Register" className="button-login">
                            <i className="fa fa-user" aria-hidden="true"></i> Register
                    </Link>
                    </div>
                </div>
                <Popup open={errorModal.open} position="center center" closeOnDocumentClick onClose={closeModal}>
                    <div className="popup">
                        <p className="popup-text">{errorModal.message}</p>
                        <div className="popup-image">
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </div>
                        <div className="popup-button" onClick={closeModal}>
                            Try again
                        </div>
                    </div>
                </Popup>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <img src={LoadingImage} />
            </div>
        )
    }
}

export default Login;

const lock = {
    width: '50%',
    height: '50%',
    margin: '1em'
}