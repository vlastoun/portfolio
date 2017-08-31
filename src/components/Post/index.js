import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MarkdownParser from '../MarkdownParser';

const Post = (props) => {
  const { title, body, description } = props.post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <MarkdownParser data={body} />
      {!props.isLoading && <Link to="/projects"><Button style={{ marginTop: '2rem', marginBottom: '2rem' }}>Zpět</Button></Link>}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  isLoading: PropTypes.object.isRequired,
};

export default Post;
