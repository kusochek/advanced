import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos';

const rootReducer = combineReducers({
  todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// export default createStore({
//   reducer: todosReducer,
// });
