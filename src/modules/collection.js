import ToDo from './todo.js';

export default class Collection {
  constructor(localStorageItem, list) {
    this.localStorageItem = localStorageItem;
    this.list = list || [];
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

  setLocalStorage = (value) => {
    localStorage.setItem('todo', JSON.stringify(value));
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

  updateCheck = (index, val) => {
    this.list[index].completed = val;
    this.setLocalStorage(this.list);
  }

  removeAllCompleted = () => {
    this.list = this.list.filter((todo) => todo.completed === false);
    this.resetIndex();
    this.setLocalStorage(this.list);
  }

  allTodo = () => this.list;
}
