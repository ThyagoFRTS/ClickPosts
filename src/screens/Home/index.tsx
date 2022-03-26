import React, { useEffect } from 'react';
import { View } from 'react-native';
import Post from '../../components/Post';
import PostList from '../../components/PostList';
import { useAppDispatch } from '../../hooks/redux';
import { api } from '../../services/api';
import { getPostsFromApi } from '../../storage/ducks/posts/postsSlicer';
import { PostsState } from '../../storage/ducks/posts/types';

import { Container } from './styles';

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getPostsFromApi())
    }, [])
    return (
        <Container>
            <PostList />
        </Container>
    );
}

export default Home;