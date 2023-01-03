import "./App.css";
import RestBar from "./components/restBar/RestBar";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Service from "./components/services/Service";
import Room from "./components/rooms/Room";
import Footer from "./components/footer/Footer";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Single from "./components/rooms/Single";



/////


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
      <Single />
   
   
    
    
    </div>
  );
}

export default App;
