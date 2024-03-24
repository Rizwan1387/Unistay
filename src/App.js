import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import SearchForm from './components/SearchForm';
import Chatroom from './components/Chatroom';
import About from './components/About';
import './App.css'
import Navbar2 from './components/navbar2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './pages/mainpage';
import Aboutpage from './pages/Aboutpage';
import Map from "./components/Map"
import Main2 from "./components/Main2"

const App = () => {
  return (
    <BrowserRouter>
        <Navbar2/>
           <Routes>
              <Route exact path="/Header" Component={Header} />
              <Route index element={<Mainpage />} />
              <Route path="/RegistrationForm" Component={RegistrationForm} />
              <Route path="/SearchForm" Component={SearchForm} />
              <Route path="/Chatroom" Component={Chatroom} />
              <Route path="/About" element={<Aboutpage />} />
              <Route path="/Map" element={<Map/>} />
              <Route path="/Main2" element={<Main2/>} />


           </Routes>
        

        
           
     
    </BrowserRouter>
  );
};


export default App;
