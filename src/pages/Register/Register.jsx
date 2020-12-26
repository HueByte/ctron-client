import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LoadingImage from '../../assets/bars.svg';
import Popup from 'reactjs-popup';
import { AuthContext } from '../../lib/api-calls/AuthContext';
import './Register.css';
import { AuthRegister } from '../../lib/api-calls/Authentication';

const Register = () => {
    const authContext = useContext(AuthContext);
    const [redirect, setRedirect] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loadingState, setLoadingState] = useState(false);
    const [errorModal, setErrorModal] = useState({
        open: false,
        message: ''
    })

    const closeModal = () => setErrorModal({
        open: false,
        message: ''
    })
    
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            SendRequest();
        }
    }

    const SendRequest = () => {
        setLoadingState(true);

        AuthRegister(email, username, password)
            .then(data => {
                setLoadingState(false);
                if (data == null || data.status >= 500) {
                    PromiseRejectionEvent('');
                }
                else return data.json();
            })
            .then(data => {
                console.log(data);
                if(!data.isSuccess) {
                    setErrorModal({ open: true, message: data.message });
                }
                else {
                    setRedirect(true);
                }
                //TODO 
                //redirect? what should I do here
                //setRedirect(true);
            })
            .catch(() => {
                setErrorModal({ open: true, message: 'Something went wrong with registering your account'});
            })

        //register
    }

    if (authContext.isAuthenticated()) return <Redirect to="/" />;

    else if (redirect) return <Redirect to="/" />;

    else if (!loadingState) {
        return (
            <div className="container">
                <div className="form-container">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/2317/2317407.svg" style={lock} />
                    <input onChange={event => setEmail( event.target.value )} onKeyDown={handleKeyDown} className="input-blackbg" type="text'" placeholder="Email" spellCheck="false" />
                    <input onChange={event => setUsername( event.target.value )} onKeyDown={handleKeyDown} className="input-blackbg" type="text'" placeholder="Username" spellCheck="false" />
                    <input onChange={event => setPassword( event.target.value )} onKeyDown={handleKeyDown} className="input-blackbg" type="password" placeholder="Password" />
                    <div className="options">
                        <div onClick={SendRequest} className="button-login">
                            <i className="fa fa-user" aria-hidden="true"></i> Register
                        </div>
                        <Link to="/" className="button-login">
                            <i class="fas fa-home"></i> Home
                        </Link>
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

export default Register;

const lock = {
    width: '50%',
    height: '50%',
    margin: '1em'
}