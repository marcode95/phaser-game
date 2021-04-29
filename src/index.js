import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash now in
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());