import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Projects from "./components/Projects";
import OurTeam from "./components/OurTeam";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
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
