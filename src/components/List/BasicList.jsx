import { List } from '@mui/material';
import React from 'react';
import BasicListItem from './BasicListItem';

function BasicList({ todos, handleDelete }) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => <BasicListItem key={todo.id} todo={todo} handleDelete={handleDelete} />)}
    </List>
  );
}

export default BasicList;
