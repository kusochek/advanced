import { createAction } from "@reduxjs/toolkit";
import { moduleName } from "./constants";

const clearTodoAction = createAction(`${moduleName}/clearTodoAction`);

export default { clearTodoAction };
