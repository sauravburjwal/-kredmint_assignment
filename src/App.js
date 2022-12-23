import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Shop from './components/shop/Shop';
import ItemDetails from './components/itemDetails/ItemDetails';
import { useShopContext } from './context/shopContext';
import Cart from './components/cart/Cart';
import './App.css';

function App() {
  const { showCart } = useShopContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {showCart && <Cart />}
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:id" element={<ItemDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
