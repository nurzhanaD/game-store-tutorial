import React from 'react';
import './ItemsInCart.css';

export function ItemsInCart({ quantity = 0}) {
  return quantity > 0 ? (
    <div className="ItemsInCart">
      { quantity }
    </div>
  ) : null
}
