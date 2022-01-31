const date = document.querySelector('.date');
const textInput = document.querySelector('.text');
const saveButton = document.querySelector('.button_save');
const loadButton = document.querySelector('.button_load');
const currencyButtons = document.querySelectorAll('.money');
const currencySelection = document.querySelector('.currency-selection');

console.log(currencyButtons);

date.innerText = new Date();

saveButton.addEventListener('click', (event) => {
  event.preventDefault();
  let text = textInput.value;
  localStorage.setItem('text', text);
  currencyButtons.forEach((money) => {
    if (money.checked === true) {
      localStorage.setItem('currency', money.value);
    }
  });
});

loadButton.addEventListener('click', (event) => {
  event.preventDefault();
  textInput.value = localStorage.getItem('text');
  currencyButtons.forEach((money) => {
    if (money.value === localStorage.getItem('currency')) {
      money.checked = true;
    }
  });
});
