import React, { useEffect, useState } from 'react';
import { BaseUrl } from './ApiRoutes';

export const Login = async (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.username, password: this.password })
    }

    const response = await fetch(`${BaseUrl}api/Account/Login`, requestOptions);
    
    //simulating loading test
    await sleep();
    
    const user = response.json();
    localStorage.setItem('currentUser', user);
    return user;
}

const sleep = (milisec) => {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

export const Logout = () => {

}

export default PostData;