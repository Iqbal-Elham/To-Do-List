import ToDo from './todo.js';

export default class Collection {
  constructor() {
    this.list = [];
  }

  addTask = (description) => {
    const todo = new ToDo(description, false, this.list.length);
    this.list.push(todo);
    this.setLocalStorage(this.list);
  }

  removeTask = (index) => {
    this.list = this.list.filter((todo) => todo.index !== index);
    this.resetIndex();
    this.setLocalStorage(this.list);
  }

  setLocalStorage = (li) => {
    localStorage.setItem('todo', JSON.stringify(li));
  };

  resetIndex() {
    this.list.forEach((todo, index) => {
      todo.index = index;
    });
    this.setLocalStorage();
  }

  updateTask = (editValue, index) => {
    this.list[index].description = editValue;
    this.setLocalStorage(this.list);
  }

  updateCheck = (index, value) => {
    this.list[index].completed = value;
    this.setLocalStorage(this.list);
  }

  removeAllCompleted = () => {
    this.list = this.list.filter((todo) => todo.completed === false);
    // this.items.sort((a, b) => a.index - b.index);
    this.resetIndex();
    this.setLocalStorage(this.list);
  }

  allTodo = () => this.list;
}
