import { fork, all } from 'redux-saga/effects';
import PostsSaga from './containers/ProjectsPage/sagas';
import SingleProject from './containers/SingleProject/sagas';

const sagas = [
  PostsSaga,
  SingleProject,
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));
  yield all([...globalSagasForks]);
}

export default globalSagas;
