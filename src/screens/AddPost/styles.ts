import styled from "styled-components/native";
import { fonts } from "../../global/fonts";

export const Container = styled.ScrollView`
    flex: 1;
`
export const UserSelect = styled.Text`
    width: 90%;
    height: 50px;
    text-align: center;
    padding-left: 20px;
    margin-top: 10px;
    border-radius: 5px;
    color: black;
    margin-bottom: 16px;
    background-color: white;
    font-family: ${fonts.title};
    justify-content: center;
    align-items: center;
`

export const HorizontalView = styled.View`
    flex-direction: row;
    width: 90%;
`

export const ModalContent = styled.View`
    width: 100%;
    align-items: center;
    
`