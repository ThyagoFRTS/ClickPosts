import styled from "styled-components/native";
import { fonts } from "../../global/fonts";
import { theme } from "../../global/theme";

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    flex: 1;
    margin: 8px;
    background-color: white;
    padding: 8px;
    border-radius: 16px;
`

export const UserContainer = styled.View`
    flex: 1;
    margin-left: 4px;
    justify-content: space-around;
`
export const RowView = styled.View`
    flex-direction: row;
    align-items: center;
`

export const UserProfile = styled.View`
    height: 60px;
    width: 60px;
    margin-top: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.primary.light};
    border-radius: 30px;
`

export const InitialLetterUser = styled.Text`
    font-size: 30px;
    color: ${theme.primary.text};
    font-family: ${fonts.title};
`

export const Name = styled.Text`
    font-family: ${fonts.title};
    font-size: 19px;
`

export const UserName = styled.Text`
    font-family: ${fonts.title};
    font-size: 16px;
    margin-left: 4px;

`

