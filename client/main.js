const form = document.createElement('form');
document.body.appendChild(form);

const input = document.createElement('input');
input.placeholder = "Type here or else I'll scream";
form.appendChild(input);

const button = document.createElement('button');
button.innerText = 'Click here!';
button.role = 'ADD';
form.appendChild(button);

const ul = document.createElement('ul');
document.body.appendChild(ul)

const removeElement = (el) => {
  console.log(el)
  el.remove();
}

form.onsubmit = (event) => {
  event.preventDefault()
  const li = document.createElement('li');
  ul.appendChild(li);
  li.innerText = input.value
  li.onclick = removeElement.bind(null, li)
  input.value = '';
}
