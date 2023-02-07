import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Cart from './components/home/Cart';
import Navbar from './components/header/Navbar';
import SingleProductPage from './components/home/SingleProductPage';
import Products from './components/home/Products';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/allproducts" element={<Products/>}/>
          <Route path="/allproducts/product/:productId" exact element={<SingleProductPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
