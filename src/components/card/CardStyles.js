import styled from 'styled-components/native';

export const Container = styled.View`
    width: 80%;
    background-color: #ffff;
    height: 20%;
    border-radius: 10px;
    border-width: 1px;
    border-color: #cccccc;
    margin-top: 20px;
    align-items: center;
`;

export const Contents = styled.View`
    flex-direction: column;
    width: 90%;
`;

export const Title = styled.Text`
    color: #9e9e9e;
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
`;

export const SecondTitle = styled.Text`
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
`;

export const Paragraph = styled.Text`
    color: #b3b3b3;
`;