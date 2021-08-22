import React, { Component } from 'react';
import shortid from 'shortid';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      {
        id: 'id-1',
        name: 'Rosie Simpson',
        number: '459-12-56',
        completed: false,
      },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        number: '443-89-12',
        completed: false,
      },
      {
        id: 'id-3',
        name: 'Eden Clements',
        number: '645-17-79',
        completed: false,
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        number: '227-91-26',
        completed: false,
      },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
      completed: false,
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  // === LENA
  // addContact = ({ name, number }) => {
  //   const { contacts } = this.state;
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   if (contacts.find(contact => contact.name === name)) {
  //     alert(`${name} is already in contacts.`);
  //   } else {
  //     this.setState(prevState => ({
  //       contacts: [...prevState.contacts, contact],
  //     }));
  //   }
  // };
  // === LENA

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // === LENA
  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };
  // === LENA

  togleCompleted = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.map(contact =>
        contact.id === contactId
          ? { ...contact, completed: !contact.completed }
          : contact,
      ),
    }));
  };

  hangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // === LENA
  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };
  // === LENA

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  // getFilterContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  getCompletedTodoCount = () => {
    const { contacts } = this.state;

    return contacts.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { contacts, filter } = this.state;

    const totalTodosCount = contacts.length;
    const completeTodosCount = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <p>All contacts: {totalTodosCount}</p>
        <p>Number of selected: {completeTodosCount} </p>

        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.hangeFilter} />
        <ContactList
          contacts={visibleTodos}
          onDeleteTodo={this.deleteContact}
          onTogleCompleted={this.togleCompleted}
        />
      </div>
    );
  }
}

export default App;
