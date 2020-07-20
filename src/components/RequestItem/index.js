import React from 'react';

import api from '../../services/api';

import {
  Container,
  Number,
  Description,
  ClientData,
  StatusData,
  FinishButton,
} from './styles.js';

export default function RequestItem({ request }) {
  async function handleFinishRequest() {
    const success = await api.delete(`request/${request.id}`);

    window.location.reload();
  }

  return (
    <Container>
      <Number>#{request.id}</Number>
      <Description>{request.description}</Description>
      <hr />
      <ClientData>
        <p>
          <b>Nome:</b> {request.client_name}
        </p>
        <p>
          <b>Telefone:</b> *********
        </p>
        {request.delivery ? (
          <>
            <p>
              <b>CEP:</b> {request.zip_code}
            </p>
            <p>
              <b>Endereço: </b>
              {request.address}
            </p>
          </>
        ) : (
            <b>Cliente irá retirar no local</b>
          )}
      </ClientData>

      <StatusData>
        <p>
          <b>Valor total: </b>R$ {request.total_value}
        </p>
        <p>{request.request_status}</p>
      </StatusData>

      <FinishButton onClick={handleFinishRequest}>
        Finalizar pedido
      </FinishButton>
    </Container>
  );
}
