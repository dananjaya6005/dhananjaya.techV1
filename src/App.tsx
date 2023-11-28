import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import Hack from "./screen/Hack";
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer";
import Blog from './screen/Blog';
import GitHub from './screen/Github';

function App() {
  
  return (
    <>
    
      <BrowserRouter basename="/">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hack" element={<Hack />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/github" element={<GitHub />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

  


    </>
  );
}

export default App;
