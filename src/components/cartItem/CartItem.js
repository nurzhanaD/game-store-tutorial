import React from 'react';
import './CartItem.css';

export function CartItem({title,price}) {
  return (
    <div className="CartItem">
        <span>{ title }</span>
        <div className="cart-item__price">
            <span>{price} ₽.</span>
        </div>
    </div>
  )
}
