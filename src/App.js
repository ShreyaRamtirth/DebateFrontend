
import { Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Login from './components/auth/Login';
function App() {
  return (
    <div className="App">
     
      <Router >
      <Header />
        <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/"   element={<MainBody />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
