import './App.css';
import { AuthProvider } from './lib/api-calls/AuthContext';
import { Routes } from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Router>
  );
}

export default App;
