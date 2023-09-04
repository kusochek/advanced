import { createAction } from "@reduxjs/toolkit";
import { moduleName } from "./constants";

const clearTodoAction = createAction(`${moduleName}/clearTodoAction`);
const fetchTodosSuccess = createAction(`${moduleName}/fetchTodosSuccess`);

export default { clearTodoAction, fetchTodosSuccess };

// export const fetchTodosSuccess = (payload) => ({
//   type: 'fetchTodosSuccess',
//   payload,
// });
