import React, { createContext, useEffect, useRef, useState } from 'react';
import { repository } from '../repository/repository';
import type { Todo, Filter } from '../types/index';
import { useContext } from 'react';

const filters: Filter[] = ['All', 'Active', 'Completed'];

type Props = {
  children: React.ReactNode;
};
interface TodoContextValue {
  todos: Todo[];
  filter: Filter;
  filters: Filter[];
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  removeTodoById: (id: number) => void;
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
  const todoId = useRef(0);
  const [todos, setTodos] = useState(initialTodoList);
  const [filter, setFilter] = useState<Filter>(filters[0]);

  useEffect(() => {
    repository.saveTodos(todos);
  }, [todos]);

  const createTodo = (todo: string): void => {
    const newTodo: Todo = {
      id: todoId.current++,
      content: todo,
      status: 'Active',
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeTodoById = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (newTodo: Todo) => {
    setTodos(todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo)));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
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
