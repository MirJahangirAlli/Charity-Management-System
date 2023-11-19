import React from 'react';
import Mainpage from './Components/Mainpage';
import './App.css';
// import Rout from './Components/Rout';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import SignUp from './Components/SignUp';
import Com from './Components/Com.js';
import DonatePage from './Components/DonatePage.jsx';

function App() {
  return (
   <>
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Mainpage/>}></Route>
            <Route path="/signin" element={<SignUp/>} />
            <Route path="/admin-dashboard" element={<Com/>} />
            <Route path="/donate" element={<DonatePage/>} />

          
          </Routes>
        </BrowserRouter>

   </>
  );
}

export default App;
