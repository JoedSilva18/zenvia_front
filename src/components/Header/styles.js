import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`;

export const Container = styled.div`
    height: 65px;
    width: 100%;
    background-color: orangered;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Brand = styled.div`
    height: 45px;
    color: white;
    font-size: 30px;
`;