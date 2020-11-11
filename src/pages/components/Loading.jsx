import React, { Component } from 'react';
import LoadingImage from '../../assets/bars.svg';

const LoadingFetch = (Component) => {
    return function WithLoadingComponent({ isLoading, ...props}) {
        if(!isLoading) return <Component {...props} />
        
        return (
            <img src={LoadingImage} fill="cyan" />
        );
    }
}

export default LoadingFetch;