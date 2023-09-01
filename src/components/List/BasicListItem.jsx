import { Checkbox, IconButton, ListItem , ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function BasicListItem({ todo, handleDelete }) {
  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => handleDelete(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            // checked={checked.indexOf(value) !== -1}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText id={todo.id} primary={todo.name} />
      </ListItemButton>
    </ListItem>
  );
}

export default BasicListItem;
