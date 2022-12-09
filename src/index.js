import './style.css';
import listRender from './modules/displayUI.js';

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('todo')) {
    listRender(JSON.parse(localStorage.todo));
  }
});