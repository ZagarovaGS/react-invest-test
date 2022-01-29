import './footer.css';
import React from 'react';

export default function Footer(props) {
  let date = new Date();
  return (
    <div className="footer">
      <p>{`${date}`}</p>
      <p>г.Москва</p>
      <a href="https://www.google.com/">Наш сайт</a>
      <br />
    </div>
  );
}
