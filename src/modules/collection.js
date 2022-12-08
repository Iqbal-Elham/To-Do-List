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
    this.setLocalStorage(this.list);
  }

  // updateIndex = (index) => {
  //   for (let i = index; )
  // }

  setLocalStorage = (li) => {
    localStorage.setItem('todo', JSON.stringify(li));
  };

  updateTask = (editValue, index) => {
    this.list[index].description = editValue;
    return this.list;
  }

  allTodo = () => this.list;
}
