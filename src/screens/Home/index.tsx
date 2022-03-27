import React, { useEffect, useState } from 'react';
import LoadingIndicator from '../../components/LoadingIndicator';
import PostList from '../../components/PostList';
import SearchBar from '../../components/SearchBar';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getPostsFromApi } from '../../storage/ducks/posts/postsSlicer';

import { Container } from './styles';

const Home: React.FC = () => {
    const [search, setSearch] = useState('')
    const { isLoading } = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPostsFromApi())
    }, [])
    
    return (
        <Container>
            <SearchBar value={search} setValue={setSearch}/>
            {isLoading ?
                <LoadingIndicator />
                :
                <PostList search={search}/>
            }
        </Container>
    );
}

export default Home;