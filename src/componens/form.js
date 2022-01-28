import React from 'react';
import './form.css';

export default function Form() {
  return (
    <form class="form">
      <h2>Информация о трейдере</h2>
      <input type="text" class="text" placeholder="Введите сообщение" />
      <div className="currency">
        <div className="currency-selection">
          <label for="money" class="label">
            Рубль
          </label>
          <input nameName="money" type="radio" value="RUB" checked />
        </div>
        <div class="currency-selection">
          <label for="money" class="label">
            Доллар
          </label>
          <input nameName="money" type="radio" value="USD" />
        </div>
        <div class="currency-selection">
          <label for="money" className="label">
            Евро
          </label>
          <input name="money" type="radio" value="EURO" />
        </div>
        <div class="buttons">
          <input type="submit" className="button button_save" value="Save" />
          <input type="submit" className="button button_load" value="Load" />
        </div>
      </div>
    </form>
  );
}
