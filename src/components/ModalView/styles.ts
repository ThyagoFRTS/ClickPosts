import { Dimensions } from 'react-native';
import { theme } from './../../global/theme';
import styled from "styled-components/native";

export const Container = styled.View`
    width: ${Math.floor(Dimensions.get("window").width * 4 / 5)}px;
    height: ${Math.floor(Dimensions.get("window").height * 7 / 10)}px;
    background-color: ${theme.gray};
    border-radius: 8px;
    align-items: center;
    
`

export const TransparentView = styled.View`
    flex: 1;
    background-color: ${theme.overlay};
    align-items: center;
    justify-content: center;
`