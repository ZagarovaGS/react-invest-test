import React, { useState } from 'react';
import './form.css';

export default function Form() {
  let [text, setText] = useState('');
  let [currency, setCurrency] = useState('');

  const handleText = (event) => {
    let element = event.target.value;
    return setText(element);
  };

  const handleRadioInput = (event) => setCurrency(event.target.value);

  const handleSaveButton = (event) => {
    event.preventDefault();
    localStorage.setItem('text', text);
    localStorage.setItem('currency', currency);
  };

  const handleLoadButton = (event) => {
    event.preventDefault();
    setText(localStorage.getItem('text'));
    setCurrency(localStorage.getItem('currency'));
  };

  return (
    <form className="form">
      <h2>Информация о трейдере</h2>
      <input
        type="text"
        className="text"
        placeholder="Введите сообщение"
        value={text}
        onChange={handleText}
      />
      <div className="currency">
        <div className="currency-selection">
          <label htmlFor="money" className="label">
            Рубль
          </label>
          <input
            name="money"
            type="radio"
            value="RUB"
            onChange={handleRadioInput}
            checked={'RUB' === currency ? true : false}
          />
        </div>
        <div className="currency-selection">
          <label htmlFor="money" className="label">
            Доллар
          </label>
          <input
            name="money"
            type="radio"
            value="USD"
            onChange={handleRadioInput}
            checked={'USD' === currency ? true : false}
          />
        </div>
        <div className="currency-selection">
          <label htmlFor="money" className="label">
            Евро
          </label>
          <input
            name="money"
            type="radio"
            value="EURO"
            onChange={handleRadioInput}
            checked={'EURO' === currency ? true : false}
          />
        </div>
        <div className="buttons">
          <input
            type="submit"
            className="button button_save"
            value="Save"
            onClick={handleSaveButton}
          />
          <input
            type="submit"
            className="button button_load"
            value="Load"
            onClick={handleLoadButton}
          />
        </div>
      </div>
    </form>
  );
}
