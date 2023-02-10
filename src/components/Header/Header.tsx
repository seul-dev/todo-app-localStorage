import { useTodoContext } from '../../context/TodoContext';
import type { Filter } from '../../types';
import styles from './Header.module.css';

const filters: Filter[] = ['All', 'Active', 'Completed'];

export default function Header() {
  const { setFilter } = useTodoContext();
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
