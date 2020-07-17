import React from 'react';

import { Container } from './styles';

function Dashboard() {
  return (
    <Container>
      <h1>Meus pedidos</h1>
      <div>
        <table>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>CEP</th>
            <th>Endereço</th>
            <th>Pedido</th>
            <th>Status Pagamento</th>
            <th>Finalizar</th>
          </tr>
          <tr>
            <td>Joed</td>
            <td>1198232350</td>
            <td>53125400</td>
            <td>Rua dona Joana</td>
            <td>Bolo salgado</td>
            <td>Aguardando pagamento</td>
            <td>
              <button>Finalizar</button>
            </td>
          </tr>
          <tr>
            <td>Joed</td>
            <td>1198232350</td>
            <td>53125400</td>
            <td>Rua dona Joana</td>
            <td>Bolo salgado</td>
            <td>Aguardando pagamento</td>
            <td>
              <button>Finalizar</button>
            </td>
          </tr>
          <tr>
            <td>Joed</td>
            <td>1198232350</td>
            <td>53125400</td>
            <td>Rua dona Joana</td>
            <td>Bolo salgado</td>
            <td>Aguardando pagamento</td>
            <td>
              <button>Finalizar</button>
            </td>
          </tr>
        </table>
      </div>
    </Container>
  );
}

export default Dashboard;
