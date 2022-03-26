import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator';
import Post from '../../components/Post';
import PostList from '../../components/PostList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { api } from '../../services/api';
import { getPostsFromApi } from '../../storage/ducks/posts/postsSlicer';
import { PostsState } from '../../storage/ducks/posts/types';

import { Container } from './styles';

const Home: React.FC = () => {
    //const [isLoading, setLoading] = useState(true)
    const dispatch = useAppDispatch()
    const { isLoading } = useAppSelector(state => state.posts)
    useEffect(() => {
        dispatch(getPostsFromApi())
    }, [])
    return (
        <Container>
            {isLoading ?

                <LoadingIndicator />
                :
                <PostList />
            }
        </Container>
    );
}

export default Home;