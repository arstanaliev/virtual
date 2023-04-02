import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Projects from "./components/Projects";
import OurTeam from "./components/OurTeam";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import {useState} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div className="App" style={{
            background: darkMode ? "#00004b" : "#111827",
        }}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Hero/>
            <Service/>
            <Projects/>
            <OurTeam/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;
