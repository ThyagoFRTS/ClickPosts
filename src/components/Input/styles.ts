import { fonts } from './../../global/fonts';
import styled from "styled-components/native";

export const CustomInput = styled.TextInput`
    width: 90%;
    height: 50px;
    padding-left: 20px;
    margin-top: 10px;
    border-radius: 5px;
    color: black;
    background-color: white;
    font-family: ${fonts.title};
`