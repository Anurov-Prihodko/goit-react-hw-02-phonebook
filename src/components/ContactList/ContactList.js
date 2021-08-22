import React from 'react';
import classNames from 'classnames';
import s from './ContactList.module.css';

const TodoList = ({ contacts, onDeleteTodo, onTogleCompleted }) => (
  <ul className={s.todoList}>
    {contacts.map(({ id, name, number, completed }) => (
      <li key={id} className={classNames(s.item, { [s.completed]: completed })}>
        <input
          type="checkbox"
          className={s.checkbox}
          checked={completed}
          onChange={() => onTogleCompleted(id)}
        />
        <p className={s.text}>
          {name}: {number}
        </p>
        <button
          type="button"
          className={s.pug}
          onClick={() => onDeleteTodo(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

// function ContactList({ contacts, onDeleteContact }) {
//   return (
//     <ul className={s.list}>
//       {contacts.map(({ id, name, number }) => (
//         <li key={shortid.generate()} className={s.item}>
//           {name}: {number}
//           <button
//             className={s.button}
//             type="button"
//             onClick={() => onDeleteContact(id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

export default TodoList;
