import styled from 'styled-components';

export const Container = styled.div`
    background-color: orangered;
    margin: 5px;
    padding: 5px;
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    font-size: 20px;

    :hover {
        box-shadow: 3px 3px 3px gray;
        cursor: pointer;
        background-color: red;
    }
`;

export const Number = styled.span`
    color: white;
`;

export const Description = styled.p`
    text-align: center;
    font-weight: bold;
    color: white;
    padding: 5px;
    margin-top: 20px;
    height: 50px;
`;

export const ClientData = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 3px;
    color: white;
`;

export const StatusData = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 3px;
    color: chartreuse;
    font-weight: bold;
    margin-left: 170px;
`;

export const FinishButton = styled.button`
    background-color: red;
    color: white;
    border-radius: 5px;
    font-size: 25px;
    padding: 5px;
    margin-top: 20px;
    margin-bottom: 10px;
    border: none;
    box-shadow: 2px 2px 2px white;
    
    :hover {
        cursor: pointer;
        background-color: chartreuse;
        color: black;
    }
`;

