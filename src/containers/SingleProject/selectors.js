import { createSelector } from 'reselect';

const selectHome = (state) => state.SingleProject;
const selectPost = () => createSelector(
  selectHome,
  (homeState) => homeState.post,
);
const selectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.loading,
);
export {
  selectHome,
  selectLoading,
  selectPost,
};
