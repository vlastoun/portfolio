import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Menu,
} from 'semantic-ui-react';

const Link = () => (
  <Container>
    <Menu.Item as={NavLink} exact to="/">Home</Menu.Item>
    <Menu.Item as={NavLink} to="/projects">Projekty</Menu.Item>
    <Menu.Item as={NavLink} to="/contact">Kontakt</Menu.Item>
  </Container>
);

export default Link;

