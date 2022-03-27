import React from 'react';
import { View } from 'react-native';
import { PostProps } from '../../global/types/post';
import FeatherIcon from 'react-native-vector-icons/Feather'
import {
    Card,
    Title,
    Body,
    EditButton,
    Container,
} from './styles';
import { theme } from '../../global/theme';

const Post: React.FC<PostProps> = ({ title, body }) => {
    return (
        <Container>
            <Card>
                <EditButton onPress={()=>{}}>
                    <FeatherIcon name="edit" size={28} color={theme.white}/>
                </EditButton>
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