import React from 'react';
import { Column, Button, Icon, Title } from 'rbx';
import { FaCrosshairs } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import '../../styles/home.scss';

const Home = () => (
  <Column.Group centered>
    <Column size="half"  textAlign="centered" id="home">
      <Title size={2}>Comida saudável e gostosa</Title>
      <Title subtitle size={3}>direto na sua casa rapidamente</Title>
      <Title subtitle size={5}>Conheça novos sabores</Title>
      <Link to="/restaurants">
        <Button size="medium" color="custom-orange">
          <Icon size="small" color="white">
            <FaCrosshairs />
          </Icon>
          <span className="has-text-white">ENCONTRAR AGORA</span>
        </Button>
      </Link>
    </Column>
  </Column.Group>
)

export default Home;