import React, { useEffect, useState } from 'react';
import LoadingIndicator from '../../components/LoadingIndicator';
import PostList from '../../components/PostList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getPostsFromApi } from '../../storage/ducks/posts/postsSlicer';

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