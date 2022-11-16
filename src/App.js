
import { Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Debate from './components/debates/Debate';
import Forum from './components/forum/Forum';
import Leaderboard from './components/leaderboard/Leaderboard';
import Profile from './components/auth/Profile';
import AdminPanel from './components/admin/AdminPanel';
import DebatingScreen from './components/debates/DebatingScreen';
function App() {
  return (
    <div className="App">
     
      <Router >
      <Header />
        <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/admin" element={<AdminPanel />} /> 
        <Route path="/debate/:id" element={<DebatingScreen />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/leaderboards" element={<Leaderboard />} /> 
        <Route path="/forum" element={<Forum />} /> 
        <Route path="/debates" element={<Debate />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/"   element={<MainBody />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
