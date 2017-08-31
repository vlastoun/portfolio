import { combineReducers } from 'redux';
import Projects from './containers/ProjectsPage/reducer';
import SingleProject from './containers/SingleProject/reducer';

const createGlobalReducer = () => (
  combineReducers({
    Projects,
    SingleProject,
  })
);

export default createGlobalReducer;
