import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import Links from '../../components/Links';

const FixedMenu = () => (
  <Menu fixed="top" size="large">
    <Links />
  </Menu>
);
const FloatMenu = () => (
  <Menu inverted pointing secondary size="large">
    <Links />
  </Menu>
);

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { navVisibility: false };
    this.showFixedMenu = this.showFixedMenu.bind(this);
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
  }
  showFixedMenu() {
    this.setState({ navVisibility: true });
  }
  hideFixedMenu() {
    this.setState({ navVisibility: false });
  }
  render() {
    return (
      <div>
        {this.state.navVisibility ? <FixedMenu /> : null}
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ height: '100%', padding: '1em 0em' }}
            vertical
          >
            <Container>
              <FloatMenu />
            </Container>

            <Container text>
              <Header
                as="h2"
                content="Webové aplikace"
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '2em' }}
              />
              <Header
                as="p"
                content="Jmenuji se Vlastimil Sadílek a vyvýjím webové aplikace."
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal', marginBottom: '2em', marginTop: '3em' }}
              />

              <NavLink to="/projects">
                <Button primary size="huge">
                  Ukázka projektů
                  <Icon name="right arrow" />
                </Button>
              </NavLink>
              <Header
                as="p"
                content="#React, #Node.js, #JavaScript"
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal', marginBottom: '2em', marginTop: '3em' }}
              />
            </Container>
          </Segment>
        </Visibility>
      </div>
    );
  }
}

export default HomePage;
