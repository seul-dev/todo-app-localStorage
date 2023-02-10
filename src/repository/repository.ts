import type { Todo } from '../types/index';
interface Storage {
  saveTodos(todos: Todo[]): void;
  getTodos(): Todo[];
}

class StorageImpl implements Storage {
  private key = 'TODO';

  saveTodos = (todos: Todo[]) => {
    localStorage.setItem(this.key, JSON.stringify(todos));
  };

  getTodos = (): Todo[] => {
    const todos = localStorage.getItem(this.key);
    return todos ? (JSON.parse(todos) as Todo[]) : [];
  };
}

export const repository = new StorageImpl();
