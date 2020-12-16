import styled from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
    background-color: #f0f0f7;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const UserImage = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 150px;
`;

export const Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
`;

export const Profession = styled.Text`
    font-size: 16px;
    color: #808080;
`;

export const Icons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 20%;
    margin-top: 20px;
`;