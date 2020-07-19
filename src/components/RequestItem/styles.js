import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: #f5f3f4;
  margin: 5px;
  padding: 5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 20px;

  hr {
    margin-top: 20px;
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  :hover {
    box-shadow: 2px 2px 2px gray;
    cursor: pointer;
    background-color: ${shade(0.03, '#f5f3f4')};
  }
`;

export const Number = styled.span`
  background-color: red;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

export const Description = styled.p`
  text-align: center;
  color: #333;
  padding: 5px;
  margin-top: 20px;
  height: 50px;
`;

export const ClientData = styled.div`
  margin-top: 20px;
  display: flex;
  font-size: 17px;
  flex-direction: column;
  padding: 3px;
  color: #333;
`;

export const StatusData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 3px;
  color: #228b22;
  font-weight: bold;
  margin-left: 100px;
`;

export const FinishButton = styled.button`
  background-color: red;
  color: white;
  border-radius: 5px;
  font-size: 25px;
  font-weight: bold;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
  border: none;
  box-shadow: 2px 2px 2px gray;

  :hover {
    cursor: pointer;
    background-color: ${shade(0.2, 'red')};
  }
`;
