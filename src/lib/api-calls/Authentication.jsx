import React, { useEffect, useState } from 'react';
import { BaseUrl } from './ApiRoutes';

export const AuthLogin = async (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ UserName: username, Password: password })
    }

    const response = await fetch(`${BaseUrl}api/Account/Login`, requestOptions)
        .catch(error => console.log('error', error));

    //simulate delay
    await sleep();
    return response;
}

const sleep = (milisec) => {
    return new Promise(resolve => setTimeout(resolve, 1000));
}
