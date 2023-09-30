import React, { ChangeEvent, ChangeEventHandler, FormEvent, useEffect, useState } from 'react';
import BasicList from '../components/List/BasicList';
import {useDispatch, useSelector} from "react-redux";
import thunks from '../store/todos/thunks';
import { Button } from '@mui/material';
import actions from '../store/todos/actions';
import { moduleName } from '../store/todos/constants';
// import { clearTodos } from '../store/todos/reduced';
import { useAppDispatch, useAppSelector } from '../store/constant';

type FormData = {
  firstName: string;
  age: number;
  favAnimal: string;
};

function TodoPage(): JSX.Element {
  const { todos } = useAppSelector((state) => state.todosReducer);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormData>({ firstName: '', age: 0, favAnimal: '' });

  useEffect(() => {
    dispatch(thunks.fetchTodosThunk());
  }, [dispatch]);

  const onDelete = (id: string): void => {
    dispatch(thunks.deleteTodoThunk(id));
  };

  const clearTodoList = () => {
    // dispatch(clearTodos());
  };

  const changeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const target = event.target;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
    console.log(formData);
  };

  return (
    <div data-testid="TodoPageWrapper">
      <BasicList todos={todos} handleDelete={onDelete} />
      <Button onClick={clearTodoList}>Clear!</Button>
      <div>
        <input type='text' placeholder='First Name' name='firstName' onChange={changeInput} />
        <input type='text' name='age' placeholder='Age' onChange={changeInput} />
        <input type='text' name='favAnimal' placeholder='Favorite Animal' onChange={changeInput} />
      </div>
    </div>
  );
}

export default TodoPage;
