import React from 'react';
import {calcTotal} from '../utils.js';
import {Button} from '../button';
import {CartItem} from '../cartItem';
import './CartMenu.css';

export function CartMenu({items, onClick}) {
  return (
    <div className="CartMenu">
        <div className="card-menu__game-list">
            {items.length > 0 ? items.map(game => <CartItem key={game.title} price={game.price} title={game.title} id={game.id}/>) : 'Корзина пуста'}
        </div>
        {
            items.length > 0 ? 
            <div className="cart-menu__arrange">
                <div className="cart-menu__total-price">
                    <span>{calcTotal(items)} ₽.</span>
                </div>
                <Button type="primary" size="m" onClick={onClick}>Оформить заказ</Button>
            </div> 
            : null
        }
    </div>
  )
}
