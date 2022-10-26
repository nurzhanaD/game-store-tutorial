import React from 'react';
import { Link } from 'react-router-dom';
import { CartBlock } from '../cartBlock';
import './Header.css';

export function Header() {
  return (
    <div className="Header">
        <div className="wrapper">
            <Link to="/" className="header_store-title">Game Store</Link>
        </div>
        <div className="wrapper header_cart-btn-wrapper">
            <CartBlock />
        </div>
    </div>
  )
}
