type Props = {
  filters: string[];
};

export default function Header({ filters }: Props) {
  return (
    <header>
      <ul>
        {filters.map((filter, id) => (
          <li key={id}>{filter}</li>
        ))}
      </ul>
    </header>
  );
}
