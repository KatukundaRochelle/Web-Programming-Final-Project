import React from 'react';
import './App.css';
// import handleSubmit from './handles/handlesubmit';
// import { useRef } from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import Registration from "./routes/Registration";
import WelcomePage from './routes/WelcomePage';
import NoContent from './Components/NoContent';
import Administration from './routes/Administration';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/WelcomePage" element={<WelcomePage/>}/>
      <Route path="/NoContent" element={<NoContent/>}/>
      <Route path="/Administration" element={<Administration/>}/>
      </Routes>

    </div>
  );
}

export default App;
