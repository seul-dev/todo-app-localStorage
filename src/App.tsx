import Header from './components/Header/Header';
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';
import TodoContextProvider from './context/TodoContext';

function App() {
  return (
    <>
      <TodoContextProvider>
        <Header />
        <Input />
        <TodoList />
      </TodoContextProvider>
    </>
  );
}

export default App;
