import { call, put, all, takeEvery, takeLatest } from 'redux-saga/effects';
import { todos } from '../../api/todosService';
import actions from './actions';

function* fetchTodosSaga() {
  try {
    const response = yield call(todos.get);

    yield put(actions.fetchTodosSuccess(response));
  } catch(err) {
    console.log(err);
  }
}

export function* todosSaga() {
  yield all([
    takeEvery(actions.fetchTodosSuccess.type, fetchTodosSaga),
  ]);
}