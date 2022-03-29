import styled from "styled-components/native";
import { fonts } from "../../global/fonts";

export const Container = styled.ScrollView`
    flex: 1;
`
export const UserSelect = styled.Text`
    color: black;
    font-family: ${fonts.title};

`

export const UserSelectView = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    padding-left: 20px;
    margin-top: 10px;
    border-radius: 5px;
    margin-bottom: 16px;
    background-color: white;
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