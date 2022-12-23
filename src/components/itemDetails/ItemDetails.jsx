import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../assets/products';
import { useShopContext } from '../../context/shopContext';
import './itemDetails.css';
const ItemDetails = () => {
  const { id } = useParams();
  const item = PRODUCTS.find((p) => p.id === +id);
  const { addToCart, cartItems } = useShopContext();
  const cartItemCount = cartItems[id];

  return (
    <div className="details">
      <div className="product_details_image">
        <img src={item.productImage} alt={item.productName} className="image" />
      </div>
      <div className="product_info">
        <div className="product_info-name">
          <p>
            <b>{item.productName}</b>
          </p>
          <p> Price: ${item.price}</p>
        </div>
        <div>
          <button
            className="addToCartBttn"
            onClick={() => {
              console.log(cartItemCount);
              addToCart(item.id);
            }}
          >
            + Add {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
