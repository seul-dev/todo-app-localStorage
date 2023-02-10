import { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import styles from './Input.module.css';

export default function Input() {
  const { createTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo === '') {
      return;
    }
    createTodo(todo.trim());
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add to do...'
        value={todo}
        onChange={handleChange}
      />
      <button type='submit'>+ADD</button>
    </form>
  );
}
