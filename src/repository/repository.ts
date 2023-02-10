import type { Todo } from '../types/index';
interface Storage {
  saveTodos(todos: Todo[]): void;
  getTodos(): Todo[];
}

class StorageImpl implements Storage {
  private todoKey = 'TODO';

  saveTodos = (todos: Todo[]) => {
    localStorage.setItem(this.todoKey, JSON.stringify(todos));
  };

  getTodos = (): Todo[] => {
    const todos = localStorage.getItem(this.todoKey);
    console.log('localStorage');
    return todos ? (JSON.parse(todos) as Todo[]) : [];
  };
}

export const repository = new StorageImpl();
