import styled from "styled-components/native";
import {
    FlatListProps,
    FlatList
} from "react-native"

export const Posts = (styled.FlatList`
    
    padding-left: 8px;
    padding-right: 8px ;
` as unknown) as typeof FlatList