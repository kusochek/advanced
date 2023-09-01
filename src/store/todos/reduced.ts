import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { moduleName } from "./constants";
import thunks from "./thunks";
import actions from "./actions";

type TodosItem = {
  id: string;
  createdAt: string;
  isCompleted: Boolean;
  name: string;
}

interface ITodos {
  todos: TodosItem[] | [];
}

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    // clearTodos: (state) => {
    //   state.todos = [];
    // },
  },
  extraReducers: (builder: ActionReducerMapBuilder<ITodos>) => {
    // builder.addCase(actions.clearTodoAction, (state) => {
    //   state.todos = [];
    // });
    builder.addCase(thunks.fetchTodosThunk.fulfilled, (state, { payload }) => {
      state.todos = payload;
    });
    builder.addCase(thunks.deleteTodoThunk.fulfilled, (state, { payload }) => {
      if (state.todos.length) {
        state.todos = state.todos.filter((todo) => todo.id !== payload);
      }
    });
  }
});

// export const { clearTodos } = todosSlice.actions;
export default todosSlice.reducer;
