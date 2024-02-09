// Select the body directly
// what is the below needed for? can comment out
const body = document.body;

// Create an h1 element
const h1 = document.createElement('h1');
h1.textContent = "Welcome to My Website";

// Append the h1 element to the main element
const main = document.querySelector('main');
main.appendChild(h1);

// Create a div element
const div = document.createElement('div');

// Create a divText element and set its content
const divText = document.createElement('div');
divText.textContent = "hellllllooooo Div";

// Append the divText element to the div element
div.appendChild(divText);

// Append the div element to the body
document.body.appendChild(div);