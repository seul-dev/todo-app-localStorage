import type { Filter } from '../../types';

type Props = {
  filters: Filter[];
  filter: Filter;
  onFilterChange: React.Dispatch<
    React.SetStateAction<'All' | 'Active' | 'Completed'>
  >;
};

export default function Header({ filters, filter, onFilterChange }: Props) {
  return (
    <header>
      <ul>
        {filters.map((filter, id) => (
          <li key={id} onClick={() => onFilterChange(filter)}>
            {filter}
          </li>
        ))}
      </ul>
    </header>
  );
}
