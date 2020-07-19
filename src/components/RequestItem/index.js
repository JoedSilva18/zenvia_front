import React from 'react';

import api from '../../services/api';

import { Container, Number, Description, ClientData, StatusData, FinishButton } from './styles.js';

export default function RequestItem({ request }) {
    async function handleFinishRequest() {
        const success = await api.delete(`request/${request.id}`);

        window.location.reload();
    }

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
            

            <FinishButton onClick={handleFinishRequest}>Finalizar pedido</FinishButton>
        </Container>
    );
}