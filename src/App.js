import Header from "./components/Header";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import React from "react";

function App() {
  return (
   <BrowserRouter>
   <Header />
   <div>
    <Routes><Route path='/' element={<Home />} exact>
      
    </Route>
    <Route path='/cart' element={<Cart />}>
    
    </Route>
    </Routes>
    
   </div>
   </BrowserRouter>
      
   
  );
}

export default App;
