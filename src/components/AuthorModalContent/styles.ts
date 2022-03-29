import styled from "styled-components/native";
import { fonts } from "../../global/fonts";
import { theme } from "../../global/theme";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 8px;
`

export const UserContainer = styled.View`
    flex: 1;
    margin-left: 4px;
    background-color: #000;
`

export const ColumnView = styled.View`
    justify-content: center;
    align-items: center;
`

export const RowView = styled.View`
    flex-direction: row;
    align-items: center;
`

export const UserProfile = styled.View`
    height: 70px;
    width: 70px;
    margin-top: 8px;
    margin-bottom: 12px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.primary.light};
    border-radius: 35px;
`

export const InitialLetterUser = styled.Text`
    font-size: 30px;
    color: ${theme.primary.text};
    font-family: ${fonts.title};
`

export const Title = styled.Text`
    font-family: ${fonts.title};
    font-size: 20px;
    margin-top: 16px;
`

export const Name = styled.Text`
    font-family: ${fonts.title};
    font-size: 22px;
`

export const UserName = styled.Text`
    font-family: ${fonts.title};
    font-size: 16px;
    margin-left: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
`

export const Website = styled.Text`
    font-family: ${fonts.title};
    font-size: 16px;
    margin-left: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
`

export const Email = styled.Text`
    text-align: center;
    font-size: 15px;
    font-family: ${fonts.title};
    margin-left: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
`

export const Company = styled.Text`
    font-size: 16px;
    font-family: ${fonts.title};
    text-align: center;
    margin-left: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
`


export const Location = styled.Text`
    text-align: center;
    font-size: 15px;
    font-family: ${fonts.main};
    margin-left: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
`

