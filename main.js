const element = document.getElementById('main');

element.addEventListener('click', () => {alert('Hello World!')});

// Path: main.js

const element = document.getElementById('main');
element.addEventListener('click', () => {alert('Hello World!')});
// loop through the array and add a click event listener to each element
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {alert('Hello World!')});
}