import axios from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import { HOST } from '../../global-constants';
import { FETCH_REQUESTED, FETCH_SUCCESS, RESET_POST } from './constants';

function* fetchPost(action) {
  yield put({ type: RESET_POST });
  const URL = `${HOST}api/posts/${action.id}`;
  const post = yield call(axios.get, URL);
  yield put({ type: FETCH_SUCCESS, post: post.data });
}


function* Projects() {
  yield takeLatest(FETCH_REQUESTED, fetchPost);
}

// Bootstrap sagas
export default Projects;

