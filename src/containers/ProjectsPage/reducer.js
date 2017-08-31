import * as R from 'ramda';
import { FETCH_SUCCESS, FETCH_REQUESTED } from './constants';

const initialState = {
  posts: [],
  categories: [],
  loading: false,
};

function ProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUESTED:
      return R.assoc('loading', true, state);
    case FETCH_SUCCESS:
      return R.evolve({
        posts: R.always(action.data.posts),
        categories: R.always(action.data.categories),
        loading: false,
      }, state);
    default:
      return state;
  }
}

export default ProjectsReducer;
