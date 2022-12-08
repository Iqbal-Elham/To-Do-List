import './style.css';
import LR from './modules/displayUI.js';

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('todo')) {
    LR(JSON.parse(localStorage.todo));
  }
});