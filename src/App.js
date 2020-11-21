import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ApiFetch from './pages/FetchApiTests/Fetch';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/Fetch">
        <ApiFetch />
      </Route>
      <Route exact path="/Login">
        <Login />
      </Route>
      <Route exact path="/Register">
        <Register />
      </Route>
    </Switch>
  );
}

export default App;
