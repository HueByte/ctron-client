import React, { useEffect, useState } from 'react';
import LoadingFetch from '../components/Loading';
import FetchApi from './FetchTestApi';
import './TestFetch.css';

const ApiFetch = () => {
    const ListLoading = LoadingFetch(FetchApi);
    const [appState, setAppState] = useState({
        loading: false,
        weathers: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://localhost:5001/weatherforecast`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((weathers) => {
                setAppState({loading: false, weathers: weathers});
                console.log(weathers);
            });
    }, [setAppState]);

    return (
        <div className="container">
            <ListLoading isLoading={appState.loading} weathers={appState.weathers} />
        </div>
    )
}

export default ApiFetch;