import React from 'react';
import { View, Text } from 'react-native';
import { UserProps } from '../../global/types/users';
import IoIcon from 'react-native-vector-icons/Ionicons'
import {
    Container,
    UserProfile,
    Name,
    UserName, InitialLetterUser,
    UserContainer,
    RowView
} from './styles';
import { theme } from '../../global/theme';

type Props = {
    user: UserProps;
    setUser: (user: UserProps) => void,
    goBack: () => void,
}

const Author: React.FC<Props> = ({ setUser, user, goBack }) => {
    const handleSelectedUser = () => {
        setUser(user)
        goBack()
    }

    return (
        <Container onPress={handleSelectedUser}>
            <UserProfile>
                <InitialLetterUser>{user.name.slice(0, 1)}</InitialLetterUser>
            </UserProfile>
            <UserContainer>
                <Name>{user.name}</Name>
                <RowView>
                    <IoIcon name="md-person" color={theme.primary.light} size={12} />
                    <UserName>{user.username}</UserName>

                </RowView>

            </UserContainer>

        </Container>
    );
}

export default Author;