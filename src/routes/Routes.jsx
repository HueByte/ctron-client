// import './App.css';
import HomePage from '../pages/HomePage/HomePage';
import ApiFetch from '../pages/FetchApiTests/Fetch';
import AuthLogin from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
    Redirect,
} from "react-router-dom";
import { Suspense } from 'react';

export const Routes = () => {
    return (
        <Switch>
            <Suspense>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/Fetch">
                    <ApiFetch />
                </Route>
                <Route path="/Login">
                    <AuthLogin />
                </Route>
                <Route path="/Register">
                    <Register />
                </Route>
            </Suspense>
        </Switch>
    )
}