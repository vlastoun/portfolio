import * as R from 'ramda';
import { FETCH_SUCCESS, FETCH_REQUESTED, RESET_POST } from './constants';

const initialState = {
  post: {
    title: '',
    description: '',
    body: '',
  },
  loading: false,
};
/* eslint-disable */
function ProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_POST:
      return R.assoc('post', initialState.post, state)
    case FETCH_REQUESTED:
      return R.assoc('loading', true, state);
    case FETCH_SUCCESS:
      return R.evolve(state, {loading: false, post: action.post})
    default:
      return state;
  }
}

export default ProjectsReducer;
