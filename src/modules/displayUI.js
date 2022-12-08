import Collection from './collection.js';

const tasksUI = document.getElementById('tasksUI');
const col = new Collection();

const listRender = (item) => {
  const data = Array.isArray(item) ? item.map(
    (n) => `
  <li id="list" class="listInput"> <input id="${n.index}" type="text" value="${n.description}" readonly> 
  <i id="btn-${n.index}" onclick="removeTodo(${n.index})" class="fa-regular fa-trash-can fa-lg"></i></li>`,
  ) : [];
  tasksUI.innerHTML = data.join('');
  tasksUI.addEventListener('dblclick', (e) => {
    e.target.removeAttribute('readonly');
    e.target.parentElement.style = 'background-color:rgb(233, 210, 168)';
    e.preventDefault();
  });
};

tasksUI.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const editValue = e.target.value;
    const index = e.target.id;
    col.updateTask(editValue, index);
    e.target.setAttribute('readonly', 'readonly');
    e.target.parentElement.style = 'background-color:white';
    col.setLocalStorage(col.allTodo());
    e.preventDefault();
  }
});

tasksUI.addEventListener('focusout', (e) => {
  const editValue = e.target.value;
  const index = e.target.id;
  col.updateTask(editValue, index);
  e.target.setAttribute('readonly', 'readonly');
  e.target.parentElement.style = 'background-color:white';
  col.setLocalStorage(col.allTodo());
  e.preventDefault();
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