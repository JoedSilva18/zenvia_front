import React from 'react';

import Header from '../../components/Header';
import Filters from '../../components/Filters';
import Requests from '../../components/Requests';

import api from '../../services/api';

import { Container } from './styles';

function Dashboard() {
  return (
    <Container>
      <Header name="Salgados do seu Zé" />

      <div id="main-section">
        <p id="name-section">Pedidos Pendentes</p>

        <Filters></Filters>

        <Requests></Requests>

      </div>
    </Container>
  );
}

export default Dashboard;
