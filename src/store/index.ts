import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos';
import { todosSaga } from './todos/saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(todosSaga);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// export default createStore({
//   reducer: todosReducer,
// });
