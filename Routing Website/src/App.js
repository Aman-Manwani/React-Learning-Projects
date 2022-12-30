import React from "react";
import Home from "./Home"
import Contact from "./Contact"
import Services from "./Services"
import About from "./About"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
const App =() => {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
