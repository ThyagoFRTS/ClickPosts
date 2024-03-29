import { fonts } from './../../global/fonts';
import { Dimensions } from 'react-native';
import styled from "styled-components/native";
import { theme } from '../../global/theme';

export const Container = styled.View`
    align-items: center;
    width: 100%;
`

export const CenteredView = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`

export const RowView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 4px;
`

export const Card = styled.View`
    width: ${Math.floor(Dimensions.get("window").width * 4 / 5)}px;
    height: ${Math.floor(Dimensions.get("window").height / 5)}px;
    background-color: white;
    flex-direction: row;
    border-radius: 8px;
    margin: 20px;
    padding: 12px;
    justify-content: center;
    border-width: 1px;
    border-color: ${theme.primary.main};
`

export const UserProfile = styled.View`
    height: 80px;
    width: 80px;
    margin-top: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.primary.light};
    border-radius: 40px;
`

export const InitialLetterUser = styled.Text`
    font-size: 30px;
    color: ${theme.primary.text};
    font-family: ${fonts.title};
`

export const UserInfo = styled.View`
    justify-content: space-around;
    flex: 1;
`

export const Name = styled.Text`
    text-align: center;
    font-family: ${fonts.title};
    margin-left: 4px;
`

export const Email = styled.Text`
    text-align: center;
    font-size: 12px;
    font-family: ${fonts.title};
    margin-left: 4px;
`

export const Company = styled.Text`
    font-size: 15px;
    font-family: ${fonts.title};
    text-align: center;
    margin-left: 4px;
`

export const Website = styled.Text`
    text-align: center;
    font-size: 15px;
    font-family: ${fonts.main};
    margin-left: 4px;
`

export const City = styled.Text`
    text-align: center;
    font-size: 15px;
    font-family: ${fonts.main};
    margin-left: 4px;
`

