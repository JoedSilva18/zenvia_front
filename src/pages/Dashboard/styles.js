import styled from 'styled-components';

export const Container = styled.div`
  body {
    margin: 0px;
    padding: 0px;
  }

  div#main-section {
    background-color: white;
    height: 560px;
  }

  p#name-section {
    margin-top: 35px;
    margin-left: 30px;
    margin-bottom: 10px;
    font-size: 37px;
    color: #333;
    padding: 10px;
    font-weight: bold;
  }
`;

export const Title = styled.h1`
  margin-top: 20px;
  color: #333;
  font-size: 45px;
  margin-left: calc(50% - 200px);
`;
