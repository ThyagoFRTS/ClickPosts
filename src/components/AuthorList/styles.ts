import { theme } from '../../global/theme';
import styled from "styled-components/native";
import {
    FlatList
} from "react-native"


export const List = (styled.FlatList`
    width: 100%;
    
` as unknown) as typeof FlatList