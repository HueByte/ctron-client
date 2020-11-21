import React, { useEffect, useState } from 'react';
import { BaseUrl } from './ApiRoutes';

const PostData = async (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: "tester", password: "Testing1232" })
    }

    const response = await fetch(`${BaseUrl}api/Account/Login`, requestOptions);
    await sleep();
    return response.json();
}

const sleep = (milisec) => {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

export default PostData;