import React from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';
import TodoContextProvider from './context/TodoContext';

const filters = ['All', 'Active', 'Completed'];

function App() {
  return (
    <div>
      <TodoContextProvider>
        <Header filters={filters} />
        <Input />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
