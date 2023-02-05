import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Cart from './components/home/Cart';
import Navbar from './components/header/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
