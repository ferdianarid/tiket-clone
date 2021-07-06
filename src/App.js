import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Feature from  './components/Feature'
import MainFeature from './components/MainFeature';
import NewFeature from './components/NewFeature';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Feature />
      <MainFeature />
      <NewFeature />
    </div>
  );
}

export default App;
