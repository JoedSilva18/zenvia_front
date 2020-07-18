import React from 'react';

import { Container, Number, Description, ClientData, StatusData, FinishButton } from './styles.js';

export default function RequestItem(props) {
    return (
        <Container>
            <Number>#1</Number>
            <Description>50 coxinhas, 20 bolinhas de queijo</Description>
            <ClientData>
                <p>Dorival</p>
                <p>CEP: 88820-720</p>
                <p>Rua Unicamp Campinas - 570</p>
                <p>Telefone: 0800-0800</p>
            </ClientData>

            <StatusData>
                <p>R$ 18,90</p>
                <p>Entregar</p>
                <p>Em Andamento</p>
            </StatusData>
            

            <FinishButton type="submit">Finalizar pedido</FinishButton>
        </Container>
    );
}