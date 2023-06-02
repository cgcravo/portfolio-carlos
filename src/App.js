import './App.css';
import React from "react";
import GlobalStyles from "./GlobalStyles";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Main from './components/Main';
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer';

// import ItemDetails from "./ItemDetails";

const App = () => {
  return (
    <>
    <GlobalStyles />
    
    <Router>
        <Header />
        <Main>
        <Routes>
            <Route path="/" element={<Hero />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
            {/* <Route path="/items/:whatever" element={<ItemDetails />}/> */}
            {/* <Route path="*" element={<Error />}/> */}
        </Routes>
        </Main>
        <Footer />
    </Router>
    </>
  );
}

export default App;
