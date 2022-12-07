import './style.css';

const tasks = [
  {
    description: 'Reading 10 pages of book',
    completed: true,
    index: 0,
  },
  {
    description: 'Learning JavaScript',
    completed: true,
    index: 1,
  },
  {
    description: 'Finish my todo project',
    completed: false,
    index: 2,
  },
];

let tasksList = '';

const tasksUl = document.getElementById('tasksUl');

const listRender = () => {
  tasks.forEach((n) => {
    tasksList += `
  <li><p><span>${n.completed}</span> | ${n.description} | <span>${n.index}</span></p></li><hr>`;
  });
  tasksUl.innerHTML = tasksList;
};

window.addEventListener('load', listRender);