import { useState } from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';
import TodoContextProvider from './context/TodoContext';
import type { Filter } from './types/index';

const filters: Filter[] = ['All', 'Active', 'Completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div>
      <TodoContextProvider>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <Input />
        <TodoList filter={filter} />
      </TodoContextProvider>
    </div>
  );
}

export default App;
