import React, { Component } from 'react';
import shortid from 'shortid';

import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    // contacts: [
    //   { id: 'id-1', name: 'Pug Friend' },
    //   { id: 'id-2', name: 'Mops Love' },
    // ],
    // name: '',

    contacts: [
      {
        id: 'id-1',
        text: 'Выучить основы React',
        number: '459-12-56',
        completed: false,
      },
      { id: 'id-2', text: 'Разобраться с React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: false },
      { id: 'id-4', text: 'Попробовать React Hooks', completed: false },
    ],
    filter: '',
  };

  addTodo = ({ text, number }) => {
    const todo = {
      id: shortid.generate(),
      text,
      number,
      completed: false,
    };

    this.setState(({ contacts }) => ({
      contacts: [todo, ...contacts],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(todo => todo.id !== todoId),
    }));
  };

  togleCompleted = todoId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  hangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(todo =>
      todo.text.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  getCompletedTodoCount = () => {
    const { contacts } = this.state;

    return contacts.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { contacts, filter } = this.state;

    // const totalTodosCount = todos.length;
    // const completeTodosCount = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        {/* <div>
          <p>Всего: {totalTodosCount}</p>
          <p>Ко-во выполненных: {completeTodosCount} </p>
        </div> */}

        <TodoEditor onSubmit={this.addTodo} />
        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.hangeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onTogleCompleted={this.togleCompleted}
        />
      </>
    );
  }
}

// const App = () => (
//   <>
//     {/* <ColorPicker options={colorPickerOptions} /> */}
//     {/* <hr />
//     <Dropdown />
//     <hr />
//     <Feedback /> */}
//   </>
// );

export default App;
