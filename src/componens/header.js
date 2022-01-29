import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="menu">
        <Link to="/">Главная</Link>
        <Link to="/info">Информация</Link>
      </div>
      <h1>Всегда в инвестиционном тренде</h1>
      <div className="header-img">
        <img
          className="header-img__picture"
          src="https://files.fortrader.org/uploads/2010/03/stock-bull-bear.jpg"
          alt="быки и медведи"
        />
      </div>
    </div>
  );
}
