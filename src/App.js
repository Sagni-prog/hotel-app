
import './App.css';
import RestBar from './components/restBar/RestBar';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import Room from './components/rooms/Room';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Nav />
        <Hero />
        <RestBar />
        <Room />
        <Footer />
    </div>
  );
}

export default App;
