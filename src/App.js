<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
//demo
=======
import "./App.css";
import RestBar from "./components/restBar/RestBar";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Service from "./components/services/Service";
import Room from "./components/rooms/Room";
import Footer from "./components/footer/Footer";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
//////
>>>>>>> e9c552002e6fbf3bc6fda9ddd67611dbc62b303a

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Service />
      <RestBar />
      <Room />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
