
import './App.css';
import ResBar from './components/restBar/ResBar';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import Room from './components/rooms/Room';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Nav />
        <Hero />
        <ResBar />
        <Room />
        <Footer />
    </div>
  );
}

export default App;
