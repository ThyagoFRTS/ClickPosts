import { fonts } from './../../global/fonts';
import { Dimensions } from 'react-native';
import styled from "styled-components/native";
import { theme } from '../../global/theme';

export const Container = styled.View`
    align-items: center;
    width: 100%;
`

export const Card = styled.View`
    width: ${Math.floor(Dimensions.get("window").width * 3/ 4)}px;
    height: ${Math.floor(Dimensions.get("window").height / 7)}px;
    border-radius: 16px;
    margin: 20px;
    padding: 12px;
    background-color: white;
    border-width: 2px;
    border-color: ${theme.primary.light};
`

export const EditButton = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.primary.light};
    border-radius: 30px;
    border-width: 2px;
    border-color: ${theme.primary.light};
    z-index: 1;
    position: absolute;
    left: -20px;
    top: -20px;
`

export const Title = styled.Text`
    text-align: center;
    font-family: ${fonts.title};
    font-size: 17px;
    
    padding-left: 20px;
`

export const Body = styled.Text`
    text-align: center;
    font-size: 15px;
    margin-top: 8px;
    flex: 1;
    font-family: ${fonts.main};
    text-align: center;
    padding-left: 20px;
`

