import './style.css';
import listRender from './modules/displayUI.js';
// import collection from './modules/collection.js';

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('todo')) {
    listRender(JSON.parse(localStorage.todo));
  }
});

// window.document.onload = listRender(collection.allTodo());
