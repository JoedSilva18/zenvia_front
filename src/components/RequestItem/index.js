import React from 'react';

import { Container, Number, Description, ClientData, StatusData, FinishButton } from './styles.js';

export default function RequestItem({ request }) {
    return (
        <Container>
            <Number>#{request.id}</Number>
            <Description>{request.description}</Description>
            <ClientData>
                <p>{request.client_name}</p>
                <p>CEP: {request.zip_code}</p>
                <p>{request.address}</p>
                <p>Telefone: {request.telephone_number}</p>
            </ClientData>

            <StatusData>
                <p>R$ {request.total_value}</p>
                <p>{request.delivery ? 'Entregar' : 'Retirar'}</p>
                <p>{request.request_status}</p>
            </StatusData>
            

            <FinishButton type="submit">Finalizar pedido</FinishButton>
        </Container>
    );
}