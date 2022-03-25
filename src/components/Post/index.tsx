import React from 'react';
import { View } from 'react-native';
import { PostProps } from '../../global/types/posts';

import {
    Card,
    Title,
    Body,
    UserPicture
} from './styles';

const Post: React.FC<PostProps> = (props) => {
    return (

        <Card>
            <UserPicture />
            <Title>{props.title}</Title>
            <Body>{props.body}</Body>
        </Card>

    );
}

export default Post;