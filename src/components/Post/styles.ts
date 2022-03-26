
import { Dimensions } from 'react-native';
import styled from "styled-components/native";
import { theme } from '../../global/theme';

export const Card = styled.View`
    width: ${Math.floor(Dimensions.get("window").width * 3/ 4)}px;
    height: ${Math.floor(Dimensions.get("window").height / 7)}px;
    background-color: white;
    border-radius: 16px;
    margin: 20px;
    padding: 12px;
    border-width: 3px;
    border-color: ${theme.terciary.pink};
`

export const Title = styled.Text`
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    padding-left: 20px;
`

export const Body = styled.Text`
    text-align: center;
    font-size: 15px;
    flex: 1;
    text-align: center;
`

export const UserPicture = styled.View`
    height: 60px;
    width: 60px;
    background-color: ${theme.background};
    border-radius: 30px;
    border-width: 4px;
    border-color: ${theme.terciary.green};
    z-index: 1;
    position: absolute;
    left: -20px;
    top: -20px;
`