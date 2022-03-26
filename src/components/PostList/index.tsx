import React from 'react';
import { View } from 'react-native';
import { useAppSelector } from '../../hooks/redux';
import Post from '../Post';
import { Posts } from './styles';

const PostList: React.FC = () => {
    
    const posts = useAppSelector(state => state.posts.posts)

    return (
        <Posts
            data={posts}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => <Post key={item.id} {...item} />}
        />
    );
}

export default PostList;