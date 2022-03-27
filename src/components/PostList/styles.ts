import { theme } from './../../global/theme';
import styled from "styled-components/native";
import {
    FlatList
} from "react-native"


//background-color: #fff;
export const Posts = (styled.FlatList`
    flex: 1;
    width: 100%;
    
` as unknown) as typeof FlatList