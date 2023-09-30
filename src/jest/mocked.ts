import { TodosItem } from "../store/todos/reduced";

export const MOCKED_TODOS_DATA: TodosItem[] = [
  {
    id: 'todo-id-1',
    createdAt: '23.08.2023',
    isCompleted: true,
    name: 'Make dinner',
  },
  {
    id: 'todo-id-2',
    createdAt: '20.08.2023',
    isCompleted: false,
    name: 'Make breakfast',
  },
];
