import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Main from './components/Main';
import { useSelector } from 'react-redux';
import SideBar from './components/SideBar';
import BannerDetalle from './components/BannerDetalle';



function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <Router>
      <NavBar user={user} />
      <div className="flex flex-row mb-16">
        <BannerDetalle />
        <SideBar user={user} />
        <Main />
      </div>
    </Router>
  );
}

export default App;
