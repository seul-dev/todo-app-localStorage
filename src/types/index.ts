export type Todo = {
  id: string;
  content: string;
  status: 'Completed' | 'Active';
};

export type Filter = 'All' | 'Active' | 'Completed';
