import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import LoadingIndicator from '../../components/LoadingIndicator';
import ModalView from '../../components/ModalView';
import PostList from '../../components/PostList';
import SearchBar from '../../components/SearchBar';
import { FeedScreenNavigationProp, RootStackParamList } from '../../global/types/navigation';
import { PostProps } from '../../global/types/post';
import { UserProps } from '../../global/types/users';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getPostsFromApi } from '../../storage/ducks/posts/postsSlicer';

import { Container } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Posts'>;

const Feed: React.FC<Props> = ({navigation}) => {
    const [search, setSearch] = useState('')
    const { isLoading } = useAppSelector(state => state.posts)
    const handleNavigation = (screen: string, post: PostProps) => {
        navigation.navigate('EditPost', post)
    }

    

    return (
        <Container>
            <SearchBar value={search} setValue={setSearch}/>
            {isLoading ?
                <LoadingIndicator />
                :
                <PostList search={search} handleNavigation={handleNavigation} />
            }
        </Container>
    );
}

export default Feed;