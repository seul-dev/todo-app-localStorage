import { useState } from 'react';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';
import TodoContextProvider from './context/TodoContext';

function App() {
  return (
    <div>
      <TodoContextProvider>
        <Header />
        <Input />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
