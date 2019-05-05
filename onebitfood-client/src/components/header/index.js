import React from 'react';

import { Navbar, Container } from 'rbx';
import LogoImage from '../../assets/images/logo-v1-horizontal.png';

import "../../styles/header.scss";

const Header = () => (
  <Navbar>
    <Container>
      <Navbar.Brand>
        <img src={LogoImage} alt=""/>
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;