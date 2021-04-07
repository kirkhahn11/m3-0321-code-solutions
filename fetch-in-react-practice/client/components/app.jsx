import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => this.setState({ todos: data }))
      .catch(err => console.error(err));
  }

  addTodo(newTodo) {
    const cloneList = [...this.state.todos];
    newTodo.todoId = (cloneList[cloneList.length - 1].todoId + 1);
    cloneList.push(newTodo);
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(() => this.setState({ todos: cloneList }));
  }

  toggleCompleted(todoId) {
    const newTodos = this.state.todos;
    newTodos[todoId - 1].isCompleted = !newTodos[todoId - 1].isCompleted;

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        isCompleted: newTodos[todoId - 1].isCompleted
      })
    })
      .then(res => res.json())
      .then(data => this.setState({ todos: newTodos }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
