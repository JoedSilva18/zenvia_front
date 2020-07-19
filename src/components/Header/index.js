import React from 'react';
import { GlobalStyle, Container, Brand } from './styles.js';

export default function Header(props) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Brand>{props.name}</Brand>
      </Container>
    </>
  );
}
