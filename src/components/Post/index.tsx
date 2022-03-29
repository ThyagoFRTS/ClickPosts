import React, { useState } from 'react';
import { View } from 'react-native';
import { PostProps } from '../../global/types/post';
import FeatherIcon from 'react-native-vector-icons/Feather'
import IoIcon from 'react-native-vector-icons/Ionicons'
import {
    Card,
    Title,
    Body,
    EditButton,
    Container,
    UserContainer,
    Author,
    TextContainer,
} from './styles';
import { theme } from '../../global/theme';
import { useAppSelector } from '../../hooks/redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FeedScreenNavigationProp, RootBottomParamList, RootStackParamList } from '../../global/types/navigation';
import { useNavigation } from '@react-navigation/native';
import ModalView from '../ModalView';
import AuthorModalContent from '../AuthorModalContent';
import { UserProps } from '../../global/types/users';

type Props =  PostProps & {
    handleNavigation?: (screen: string, post: PostProps ) => void,
}

const Post: React.FC<Props> = ({ title, body, userId, id, handleNavigation }) => {
    const user = useAppSelector(state => state.users.users.find((item) => item.id == userId))
    const [openModal, setOpenModal] = useState(false);
    const post = {
        userId: userId,
        title: title,
        body: body,
        id: id,
    }

    function handleOpenModal() {
        setOpenModal(true);
    }

    function handleCloseModal() {
        setOpenModal(false);
    }

    return (
        <Container>
            <Card>
                <EditButton onPress={() => {
                    if (handleNavigation){
                        handleNavigation('EditPost', post)
                    }
                }}>
                    <FeatherIcon name="edit" size={28} color={theme.white} />
                </EditButton>
                <TextContainer>
                    <Title>
                        {title.length > 30 ?
                            title.slice(0, 30) + "..."
                            :
                            title
                        }
                    </Title>
                    <Body numberOfLines={3}>
                        {body.length > 120 ?
                            body.slice(0, 120) + "..."
                            :
                            body
                        }
                    </Body>
                </TextContainer>
                <UserContainer onPress={handleOpenModal}>
                    <IoIcon name="md-person" color={theme.primary.light} size={12} />
                    <Author>{user?.username}</Author>
                </UserContainer>
            </Card>
            <ModalView visible={openModal} closeModal={handleCloseModal}>
                <AuthorModalContent Author={user as UserProps} />
            </ModalView>
        </Container>
    );
}

export default Post;