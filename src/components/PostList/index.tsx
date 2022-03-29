import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FeedScreenNavigationProp, RootStackParamList } from '../../global/types/navigation';
import { PostProps } from '../../global/types/post';
import { useAppSelector } from '../../hooks/redux';
import Post from '../Post';
import { Posts } from './styles';

type Props =   {
    search: string | '';
    handleNavigation?: (screen: string, post: PostProps) => void,
}

const PostList: React.FC<Props> = ({ search, handleNavigation }) => {
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
            renderItem={({ item }) => <Post key={item.id} {...item} handleNavigation={handleNavigation} />}
        />
    );
}

export default PostList;