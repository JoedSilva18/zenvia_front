import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`;

export const Container = styled.div`
  height: 85px;
  width: 100%;
  background-color: orangered;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 2px gray;
`;

export const Name = styled.h3`
  margin-left: 40px;
  color: #fff;
`;

export const Brand = styled.div`
  margin-left: 40px;
  height: 40px;
  color: white;
  font-size: 25px;
  font-weight: bold;
`;
