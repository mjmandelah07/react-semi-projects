import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import Portfolio from './components/portfolio'
import Nopage from './components/nopage'


function App() {
  return (
    <div className="App">
      <Navbar />  
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
