let button = document.querySelectorAll('.show');
let displayScreen = document.querySelector('#input');
let clearBtn = document.querySelector('#btnClr');
let equalBtn = document.querySelector('#equalSign');

button.forEach(function(clicked) {
  clicked.addEventListener('click', function() {
    if (displayScreen.textContent.length < maxLength) {
      displayScreen.textContent += clicked.value;
    }
  })
})
