import styled from "styled-components/native";
import { fonts } from "../../global/fonts";
import { theme } from "../../global/theme";

export const Container = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    margin-top: 16px;
    background-color: ${theme.primary.light};
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`

export const TextButton = styled.Text`
    color: ${theme.white};
    font-family: ${fonts.title};
    text-align: center;
`