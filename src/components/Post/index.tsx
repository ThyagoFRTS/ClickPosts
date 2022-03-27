import React from 'react';
import { View } from 'react-native';
import { PostProps } from '../../global/types/post';

import {
    Card,
    Title,
    Body,
    UserPicture,
    Container,
} from './styles';

const Post: React.FC<PostProps> = ({ title, body }) => {
    return (
        <Container>
            <Card>
                <UserPicture />
                <Title>
                    {title.length > 30 ?
                        title.slice(0, 30) + "..."
                        :
                        title
                    }
                </Title>
                <Body>
                    {body.length > 120 ?
                        body.slice(0, 120) + "..."
                        :
                        body
                    }
                </Body>
            </Card>
        </Container>
    );
}

export default Post;