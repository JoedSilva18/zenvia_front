import React, { useState, useEffect } from 'react';

import RequestItem from '../RequestItem';

import api from '../../services/api';

import { Container } from './styles.js';

export default function Requests() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        async function loadRequests() {
            const response = await api.get('/request');

            setRequests(response.data); 
        }

        loadRequests();
    }, []);

    return (
        <Container>
            {requests.map(request => (
                <RequestItem key={request.id} request={request} />
            ))}

        </Container>
    );
}