import type { ITodo } from '../types/index';
interface TokenRepository {
  saveTodos(todos: ITodo[]): void;
  getTodos(): ITodo[];
}

class TokenRepositoryImpl implements TokenRepository {
  private key = 'TODO';

  saveTodos = (todos: ITodo[]) => {
    localStorage.setItem(this.key, JSON.stringify(todos));
  };

  getTodos = (): ITodo[] => {
    const todos = localStorage.getItem(this.key);
    return todos ? (JSON.parse(todos) as ITodo[]) : [];
  };
}

export const tokenRepository = new TokenRepositoryImpl();
