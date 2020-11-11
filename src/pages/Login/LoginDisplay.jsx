import React from 'react';
import './Login.css'

const LoginDisplay = (props) => {
    const { user } = props;
    console.log(user);

    return (
        <div style={container}>
            <p style={userStyle} className="user">{user.userName}</p>
            <p style={userToken} className="token">{user.token}</p>
        </div>
    )
}

export default LoginDisplay;

const container = {
    width: '50vw',
    height: 'fit-content'
}

const userStyle = {
    color: 'cyan',
}

const userToken = {
    color: 'orange',
}