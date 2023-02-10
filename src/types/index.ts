export type Todo = {
  id: number;
  content: string;
  status: 'Completed' | 'Active';
};

export type Filter = 'All' | 'Active' | 'Completed';
