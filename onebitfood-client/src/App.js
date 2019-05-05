import React, {Fragment} from 'react';
import { Container, Section } from 'rbx';
import Header from './components/header';
import Routes from './routes';

import "./App.scss";

const App = () => (
  <Fragment>
    <Header />
    <Section>
      <Container>
        <Routes />
      </Container>
    </Section>
  </Fragment>
)

export default App;