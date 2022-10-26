import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../cartBlock/CartBlock.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {CartMenu}  from '../cartMenu';
import {ItemsInCart} from '../itemsInCart'
import {calcTotal} from '../utils.js';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export function CartBlock() {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotal(items);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate('/app/order');
  }, [navigate]);
  return (
    <div className="CartBlock">
        <ItemsInCart quantity={items.length}/>
        <AiOutlineShoppingCart className="cart-block-icon" size={25} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
        {totalPrice > 0 ? <span className="cart-block-total-price">{totalPrice} ₽.</span> : null}
        {isCartMenuVisible && <CartMenu items={items} onClick={handleClick}/>}
    </div>
  )
}
