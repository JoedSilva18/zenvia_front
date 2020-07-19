import React from 'react';
import { GlobalStyle, Container, Brand, Name } from './styles.js';

export default function Header(props) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Brand> Nosso nome</Brand>
      </Container>
    </>
  );
}
