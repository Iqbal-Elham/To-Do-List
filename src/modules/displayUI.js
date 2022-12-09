import Collection from './collection.js';

const tasksUI = document.getElementById('tasksUI');
const clearAll = document.getElementById('clearAll');
const col = new Collection();

const listRender = (item) => {
  const data = Array.isArray(item) ? item.map(
    (n) => `
  <li id="list" class="listInput">
  <input id="${n.index}" class="checkbox" type="checkbox" ${n.completed ? 'checked' : ''}>
  <input id="${n.index}" class="desc" type="text" value="${n.description}" readonly> 
  <i id="btn-${n.index}" onclick="removeTodo(${n.index})" class="fa-regular fa-trash-can fa-lg"></i></li>`,
  ) : [];
  tasksUI.innerHTML = data.join('');
  tasksUI.addEventListener('dblclick', (e) => {
    e.target.removeAttribute('readonly');
    e.target.parentElement.style = 'background-color:rgb(233, 210, 168)';
  });
};

clearAll.addEventListener('click', () => {
  col.removeAllCompleted();
  listRender(col.allTodo());
});

tasksUI.addEventListener('change', (e) => {
  if (e.target.matches('.checkbox')) {
    let value = false;
    e.target.nextElementSibling.style = 'text-decoration-line: none;';
    if (e.target.checked) {
      value = true;
      e.target.nextElementSibling.style = 'text-decoration-line: line-through;';
    }
    col.updateCheck(e.target.id, value);
  }
});

tasksUI.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const editValue = e.target.value;
    const index = e.target.id;
    col.updateTask(editValue, index);
    e.target.setAttribute('readonly', 'readonly');
    e.target.parentElement.style = 'background-color:white';
    col.setLocalStorage(col.allTodo());
  }
});

tasksUI.addEventListener('focusout', (e) => {
  const editValue = e.target.value;
  const index = e.target.id;
  col.updateTask(editValue, index);
  e.target.setAttribute('readonly', 'readonly');
  e.target.parentElement.style = 'background-color:white';
  col.setLocalStorage(col.allTodo());
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