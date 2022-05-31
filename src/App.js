import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/session/Login"
import fire from "./fire";
import ListAllNumbers from "./components/phonebook/ListAllNumbers";
import AddNumber from "./components/phonebook/AddNumber";
import NotFound from "./components/NotFound";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

    fire.auth.onAuthStateChanged(user=>{
      return user?setIsLoggedIn(true):setIsLoggedIn(false);
    });

  return (
    <div>
    
    <Router>
      {isLoggedIn?
      <div>
        <a href="/"><span onClick={()=>{fire.auth.signOut()}}>Sign Out</span></a>
        <Routes>
          <Route path="/" element={<ListAllNumbers/>}>
            <Route path="/add-number" element={<AddNumber/>} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
      :
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      }
    </Router>
      
    </div>
  );
}

export default App;
