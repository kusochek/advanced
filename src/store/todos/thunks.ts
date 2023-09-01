import { createAsyncThunk } from "@reduxjs/toolkit";
import { moduleName } from "./constants";
import { todos } from "../../api/todosService";

const fetchTodosThunk = createAsyncThunk(
  `${moduleName}/fetchTodosThunk`,
  async () => {
    const response = await todos.get();
    return response;
  }
);

const deleteTodoThunk = createAsyncThunk(
  `${moduleName}/deleteTodoThunk`,
  async (id: string) => {
    await todos.delete(id);
    return id;
  }
);

export default {
  fetchTodosThunk,
  deleteTodoThunk,
};
