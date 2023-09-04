import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchUserData({ payload }) {
  try {
    const data = yield call(api.fetchUserData, payload);

    yield put(fetchDataSuccess(data));
  } catch (err) {
    yield put(fetchDataError(err));
  }
}

function* watchFetchUserData() {
  yield takeEvery('fetchDataSuccess', fetchUserData);
}
