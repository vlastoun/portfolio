import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PageTemplate from '../../components/PageTemplate';
import CardItem from '../../components/CardItem';
import { FETCH_REQUESTED } from './constants';
import { selectCategories, selectPosts } from './selectors';

class ProjectsPage extends React.Component {
  componentWillMount() {
    this.props.fetch();
  }
  render() {
    return (
      <PageTemplate>
        <div className="ui grid">
          {this.props.posts.map((post) => <CardItem {...post} key={post.id} />)}
        </div>
      </PageTemplate>
    );
  }
}

ProjectsPage.propTypes = {
  fetch: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch({ type: FETCH_REQUESTED }),
  };
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategories(),
  posts: selectPosts(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);

