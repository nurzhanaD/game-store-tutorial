import React from 'react';
import { useSelector } from 'react-redux';
import { calcTotal } from '../../components/utils.js';
import { OrderItem } from '../../components/orderItem';
import './OrderPage.css';

export function OrderPage() {
  const items = useSelector(state => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Ваша корзина пуста.</h1>
  }

  return (
    <div className="OrderPage">
      <div className="order-page__left">
        { items.map(game => <OrderItem game={game}/>) }
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>{items.length} {items.length <= 4 && items.length > 1 ? 'товара' : items.length === 1 ? 'товар' : 'товаров'} на сумму { calcTotal(items) } руб.</span>
        </div>
      </div>
    </div>
  )
}