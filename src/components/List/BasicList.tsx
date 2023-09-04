import { List } from '@mui/material';
import React from 'react';
import BasicListItem from './BasicListItem';
import { TodosItem } from '../../store/todos/reduced';

type Props = {
  todos: TodosItem[];
  handleDelete: (id: string) => void;
};

function BasicList({ todos, handleDelete }: Props): JSX.Element {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => <BasicListItem key={todo.id} todo={todo} handleDelete={handleDelete} />)}
    </List>
  );
}

export default BasicList;
