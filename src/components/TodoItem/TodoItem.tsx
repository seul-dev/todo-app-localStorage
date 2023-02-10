import { FiTrash2 } from 'react-icons/fi';
import { useTodoContext } from '../../context/TodoContext';
import type { Todo } from '../../types/index';
import styles from './TodoItem.module.css';

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo }: Props) {
  const { id, content, status } = todo;
  const { removeTodoById, updateTodo } = useTodoContext();

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status: Todo['status'] = e.target.checked ? 'Completed' : 'Active';
    updateTodo({ ...todo, status });
  };

  const handleRemove = () => {
    removeTodoById(id);
  };
  return (
    <li className={styles.todoItem}>
      <input
        type='checkbox'
        name='toggle'
        checked={status === 'Completed'}
        onChange={handleCheckBoxChange}
      />
      <p className={styles.content}>{content}</p>
      <FiTrash2 className={styles.removebtn} onClick={handleRemove} />
    </li>
  );
}
