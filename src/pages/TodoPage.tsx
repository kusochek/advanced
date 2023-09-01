import React, { useEffect } from 'react';
import BasicList from '../components/List/BasicList';
import {useDispatch, useSelector} from "react-redux";
import thunks from '../store/todos/thunks';
import { Button } from '@mui/material';
import actions from '../store/todos/actions';
import { moduleName } from '../store/todos/constants';
// import { clearTodos } from '../store/todos/reduced';
import { useAppDispatch, useAppSelector } from '../store/constant';

function TodoPage() {
  const { todos } = useAppSelector((state) => state.todosReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunks.fetchTodosThunk());
  }, [dispatch]);

  const onDelete = (id: string) => {
    dispatch(thunks.deleteTodoThunk(id));
  };

  const clearTodoList = () => {
    // dispatch(clearTodos());
  };

  return (
    <>
      <BasicList todos={todos} handleDelete={onDelete} />
      <Button onClick={clearTodoList}>Clear!</Button>
    </>
  );
}

export default TodoPage;
