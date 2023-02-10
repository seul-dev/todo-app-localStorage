import { useTodoContext } from '../../context/TodoContext';
import styles from './Header.module.css';

export default function Header() {
  const { filters, setFilter } = useTodoContext();
  return (
    <header className={styles.header}>
      <ul>
        {filters.map((filter, id) => (
          <li key={id} onClick={() => setFilter(filter)}>
            {filter}
          </li>
        ))}
      </ul>
    </header>
  );
}
