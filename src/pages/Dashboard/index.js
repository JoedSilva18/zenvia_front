import React from 'react';

import Header from '../../components/Header';
import Filters from '../../components/Filters';
import Requests from '../../components/Requests';

import api from '../../services/api';

import { Container, Title } from './styles';

function Dashboard() {
  return (
    <Container>
      <Header />

      <div id="main-section">
        <Title>Salgados do seu Zé</Title>
        <p id="name-section">Pedidos Pendentes:</p>

        <Filters />
        <Requests />
      </div>
    </Container>
  );
}

export default Dashboard;
