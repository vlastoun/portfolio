import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardItem = (props) => (
  <Link to={`/projects/${props.id}`}>
    <Card style={{paddingBottom: '1em'}}>
      <Image src={props.mainimg} />
      <Card.Content>
        <Card.Header>
          {props.title}
        </Card.Header>
        <Card.Description >
          {props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        Více
      </Card.Content>
    </Card>
  </Link>
);


CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  mainimg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default CardItem;
