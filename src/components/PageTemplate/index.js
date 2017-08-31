import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Container } from 'semantic-ui-react';
import Links from '../Links';

const style = {
  MainDiv: { paddingTop: '5em' },
};

const PageTemplate = (props) => (
  <div>
    <Menu fixed="top" size="large">
      <Links />
    </Menu>
    <Container style={style.MainDiv}>
      {React.Children.toArray(props.children)}
    </Container>
  </div>
);

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageTemplate;
