import { fonts } from './../../global/fonts';
import styled from "styled-components/native";

export const SearchInput = styled.TextInput`
    width: 90%;
    height: 50px;
    padding-left: 20px;
    margin-top: 10px;
    border-radius: 5px;
    color: black;
    margin-bottom: 16px;
    background-color: white;
    font-family: ${fonts.title};
`