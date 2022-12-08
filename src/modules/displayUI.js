import Collection from './collection.js';

const tasksUI = document.getElementById('tasksUI');
const col = new Collection();

const listRender = (item) => {
  const data = Array.isArray(item) ? item.map(
    (n) => `
  <li class="listInput"> <input id="${n.index}" type="text" value="${n.description}" class="nonEditable" readonly>  
  <button onclick="removeTodo(${n.index})"> delete </button> </li>`,
  ) : [];
  tasksUI.innerHTML = data.join('');
};

tasksUI.addEventListener('dblclick', (e) => {
  e.target.removeAttribute('readonly');
  e.target.classList.remove('uneditable');
  e.target.style = 'background-color: yellow;';
  e.target.parentElement.parentElement.style = 'background-color:yellow';
});

tasksUI.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const editValue = e.target.value;
    const index = e.target.id;
    col.updateTask(editValue, index);
    e.target.setAttribute('readonly', 'readonly');
    e.target.classList.toggle('uneditable');
    e.target.style = 'background-color: white;';
    e.target.parentElement.parentElement.style = 'background-color:white';
    col.setLocalStorage(col.allTodo());
  }
});

const addTaskForm = document.getElementById('addTaskForm');
const addTaskInp = document.getElementById('addTaskInput');

addTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  col.addTask(addTaskInp.value);
  addTaskInp.value = '';
  listRender(col.allTodo());
});

window.removeTodo = (index) => {
  col.removeTask(index);
  listRender(col.allTodo());
};

export default listRender;