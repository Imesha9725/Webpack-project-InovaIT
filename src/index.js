import './styles/main.css';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work

  alert("Connected");

  return element;
}

document.body.appendChild(component());