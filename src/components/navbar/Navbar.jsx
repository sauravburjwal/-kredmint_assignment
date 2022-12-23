import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useShopContext } from '../../context/shopContext';
import './navbar.css';

const Navbar = () => {
  const { totalQuantities, setShowCart } = useShopContext();

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart((prevState) => !prevState)}
        >
          <AiOutlineShoppingCart size={32} />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
