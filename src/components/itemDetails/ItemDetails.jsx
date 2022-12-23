import React from 'react';
import { useParams } from 'react-router-dom';

import { PRODUCTS } from '../../assets/products';
import { useShopContext } from '../../context/shopContext';
import './itemDetails.css';

const ItemDetails = () => {
  const { id } = useParams();
  const item = PRODUCTS.find((p) => p.id === +id);
  const { addToCart } = useShopContext();

  return (
    <div className="details">
      <div className="productDetailsImage">
        <img src={item.productImage} alt={item.productName} className="image" />
      </div>
      <div className="productInfo">
        <div className="productInfoName">
          <p>
            <b>{item.productName}</b>
          </p>
          <p> Price: ${item.price}</p>
        </div>
        <div>
          <button
            className="addToCartBtn"
            onClick={() => {
              addToCart(item.id);
            }}
          >
            + Add {item.quantity > 0 && <> ({item.quantity})</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
