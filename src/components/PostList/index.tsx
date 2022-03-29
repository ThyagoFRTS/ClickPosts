import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { PostProps } from '../../global/types/post';
import { useAppSelector } from '../../hooks/redux';
import Post from '../Post';
import { Posts } from './styles';

type Props = {
    search: string | '';
}

const PostList: React.FC<Props> = ({ search }) => {
    const posts = useAppSelector(state => state.posts.posts)
    const [list, setList] = useState<PostProps[]>(posts);

    useEffect(() => {
        if (search === '') {
            setList(posts);
        } else {
            setList(
                posts.filter(
                    (item) => { return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1 }
                )
            );
        }
    }, [search, posts]);

    return (
        <Posts
            data={list}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => <Post key={item.id} {...item} />}
        />
    );
}

export default PostList;