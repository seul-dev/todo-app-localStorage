import { useContext, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { TodoContext } from '../../context/TodoContext';
import styles from './TodoItem.module.css';

type Props = {
  id: number;
  content: string;
  isDone: boolean;
};

export default function TodoItem({ id, content, isDone }: Props) {
  const { removeTodoById, toggleIsDone } = useContext(TodoContext);
  const [checked, setChecked] = useState(isDone);

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    toggleIsDone(id, checked);
  };

  const handleRemove = () => {
    removeTodoById(id);
  };
  return (
    <li className={styles.todoItem}>
      <input
        type='checkbox'
        name='toggle'
        checked={checked}
        onChange={handleCheckBoxChange}
      />
      <p className={styles.content}>{content}</p>
      <FiTrash2 className={styles.removebtn} onClick={handleRemove} />
    </li>
  );
}
