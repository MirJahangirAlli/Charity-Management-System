import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Com from "./Com";

function Rout(){
    return(
         <>
              <BrowserRouter>
                 <Routes>
                     <Route path="about" element={<Com />}/>
                 </Routes>
             </BrowserRouter>
             
        </>
    )
}
export default Rout;