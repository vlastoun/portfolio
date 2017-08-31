import { createSelector } from 'reselect';

const selectHome = (state) => state.Projects;
const selectCategories = () => createSelector(
  selectHome,
  (homeState) => homeState.categories,
);
const selectPosts = () => createSelector(
  selectHome,
  (homeState) => homeState.posts,
);

export {
  selectPosts,
  selectHome,
  selectCategories,
};
