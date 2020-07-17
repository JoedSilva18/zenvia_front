import styled from 'styled-components';

export const Container = styled.div`
  body {
    margin: 0px;
    padding: 0px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    table {
      background: gray;

      th {
        background: red;
      }
    }
  }
`;
