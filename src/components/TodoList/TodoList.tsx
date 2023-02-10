import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export default function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          content={todo.content}
          isDone={todo.isDone}
        />
      ))}
    </ul>
  );
}
