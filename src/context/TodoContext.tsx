import React, { createContext, useEffect, useRef, useState } from 'react';
import { tokenRepository } from '../repository/tokenRepository';
import type { Todo } from '../types/index';

type Props = {
  children: React.ReactNode;
};
interface TodoContextValue {
  todos: Todo[];
  removeTodoById: (id: number) => void;
  createTodo: (todo: string) => void;
  updateTodo: (newTodo: Todo) => void;
}

const initialState = tokenRepository.getTodos();

export const TodoContext = createContext<TodoContextValue>({
  todos: initialState,
  removeTodoById: () => {},
  createTodo: () => {},
  updateTodo: () => {},
});

export default function TodoContextProvider({ children }: Props) {
  const todoId = useRef(0);
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    tokenRepository.saveTodos(todos);
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
      value={{ todos, removeTodoById, createTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
