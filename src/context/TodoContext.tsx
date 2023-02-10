import React, { createContext, useEffect, useRef, useState } from 'react';
import { tokenRepository } from '../repository/tokenRepository';
import type { ITodo } from '../types/index';
type Props = {
  children: React.ReactNode;
};
interface TodoContextValue {
  todos: ITodo[];
  removeTodoById: (id: number) => void;
  createTodo: (todo: string) => void;
  toggleIsDone: (id: number, checked: boolean) => void;
}

const initialState = tokenRepository.getTodos();

export const TodoContext = createContext<TodoContextValue>({
  todos: initialState,
  removeTodoById: () => {},
  createTodo: () => {},
  toggleIsDone: () => {},
});

export default function TodoContextProvider({ children }: Props) {
  const todoId = useRef(0);
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    tokenRepository.saveTodos(todos);
  }, [todos]);

  const createTodo = (todo: string): void => {
    const newTodo: ITodo = {
      id: todoId.current++,
      content: todo,
      isDone: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const removeTodoById = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleIsDone = (id: number, checked: boolean) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !checked } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, removeTodoById, createTodo, toggleIsDone }}
    >
      {children}
    </TodoContext.Provider>
  );
}
