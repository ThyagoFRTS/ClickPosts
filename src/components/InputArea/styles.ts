import { theme } from './../../global/theme';
import styled from "styled-components/native";
import { fonts } from '../../global/fonts';



export const CustomInputArea = styled.TextInput`
    width: 90%;
    margin-top: 20px;
    color: ${theme.title};
    height: 200px;
    border-radius: 8px;
    font-size: 18px;
    margin-right: 4px;
    padding-top: 16px;
    padding-left: 20px;
    font-family: ${fonts.main};
    background-color: ${theme.white};
`