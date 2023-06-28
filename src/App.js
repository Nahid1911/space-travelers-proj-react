import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import Rockets from './components/Rocket/Rockets';
import Mission from './components/Mission/Mission';
import DragonsRender from './components/Dragon/Dragon';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
  return (

    <div className="App">
      <div>
        <NavBar />
      </div>
      <div className="mainBodyDiv">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/Dragon" element={<DragonsRender />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
