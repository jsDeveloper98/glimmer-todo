import Component, { tracked } from "@glimmer/component";

class Todo {
  constructor(params) {
    Object.assign(this, params);
  }
  @tracked done = false;
  @tracked title = "";
}

export default class MyApp extends Component {
  @tracked todos = [];
  @tracked type = "all";

  setType(type) {
    this.type = type;
  }

  filterFunctions = {
    active: todo => !todo.done,
    completed: todo => todo.done
  };

  @tracked get filteredTodos() {
    if (!this.filterFunctions[this.type]) {
      return this.todos;
    }
    const filtered = this.filterFunctions[this.type];
    return this.todos.filter(filtered);
  }

  addTodos(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      let todo = new Todo({
        title: event.target.value.trim(),
        done: false
      });
      this.todos = this.todos;
      this.todos.unshift(todo);
      event.target.value = "";
    }
  }
  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.todos = this.todos;
  }
  doneAllTodos() {
    this.todos.forEach(todo => {
      todo.done = true;
    });
  }
  removeAllDoneTodos() {
    const doneTodos = this.todos.filter(todo => !todo.done);
    this.todos = doneTodos;
  }
}
