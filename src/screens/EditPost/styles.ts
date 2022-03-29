import styled from "styled-components/native";
import { fonts } from "../../global/fonts";
import { theme } from "../../global/theme";

export const ScrollContainer = styled.ScrollView`
    flex: 1;

`
export const ContentContainer = styled.ScrollView`
    flex: 1;
    width: 100%;
    background-color: #000;
`

export const UserSelect = styled.Text`
    color: black;
    font-family: ${fonts.title};

`

export const IconView = styled.View`
    width: 90%;
    height: 60px;
    margin-top: 8px;
    align-items: flex-end;
`

export const IconContainer = styled.TouchableOpacity`
    width: 60px;
    height:60px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.primary.light};
    border-radius: 8px;
`

export const ButtonContainer = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;

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