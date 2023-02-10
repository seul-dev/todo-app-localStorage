import React, { createContext, useEffect, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { repository } from '../repository/repository';
import type { Todo, Filter } from '../types/index';

const filters: Filter[] = ['All', 'Active', 'Completed'];

type Props = {
  children: React.ReactNode;
};
interface TodoContextValue {
  todos: Todo[];
  filter: Filter;
  filters: Filter[];
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  removeTodoById: (id: string) => void;
  createTodo: (todo: string) => void;
  updateTodo: (newTodo: Todo) => void;
}

const initialTodoList = repository.getTodos();

const TodoContext = createContext<TodoContextValue>({
  todos: initialTodoList,
  filter: 'All',
  filters,
  setFilter: () => {},
  removeTodoById: () => {},
  createTodo: () => {},
  updateTodo: () => {},
});

export default function TodoContextProvider({ children }: Props) {
  const [todos, setTodos] = useState(initialTodoList);
  const [filter, setFilter] = useState<Filter>(filters[0]);

  useEffect(() => {
    repository.saveTodos(todos);
  }, [todos]);

  const createTodo = (todo: string): void => {
    const newTodo: Todo = {
      id: uuidv4(),
      content: todo,
      status: 'Active',
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeTodoById = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (newTodo: Todo) => {
    setTodos(todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo)));
  };

  return (
    <TodoContext.Provider
      value={{
        todos: getFilteredTodoList(todos, filter),
        filter,
        filters,
        setFilter,
        removeTodoById,
        createTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);

const getFilteredTodoList = (todos: Todo[], filter: Filter) => {
  if (filter === 'All') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};
