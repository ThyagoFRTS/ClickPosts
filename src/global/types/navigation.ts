import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorScreenParams, CompositeScreenProps, CompositeNavigationProp } from '@react-navigation/native';
import { PostProps } from './post';
export type RootBottomParamList = {
    Feed: undefined,
    AddPost: undefined,
    Users: undefined,
}

export type RootStackParamList = {
    Posts: undefined,
    EditPost: PostProps | undefined,
}


export type FeedScreenNavigationProp = CompositeScreenProps<
NativeStackScreenProps<RootStackParamList,'Posts'>,
BottomTabScreenProps<RootBottomParamList>

>