import React, {Fragment} from 'react';
import { Container, Section } from 'rbx';
import Header from './components/header';
import Routes from './routes';
import ModalRoot from './components/modals'

import "./App.scss";

const App = () => (
  <Fragment>
    <Header />
    <Section>
      <Container>
        <Routes />
      </Container>
    </Section>
    <ModalRoot />
  </Fragment>
)

export default App;