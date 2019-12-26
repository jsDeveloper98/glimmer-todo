import Component from "@glimmer/component";

export default class TodoItem extends Component {
  todoDone(todo) {
    todo.done = !todo.done;
  }
}
