import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import Hack from "./screen/Hack";
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer";

function App() {
  
  return (
    <>
    
      <BrowserRouter basename="/">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hack" element={<Hack />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

  


    </>
  );
}

export default App;
