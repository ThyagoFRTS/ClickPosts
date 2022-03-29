import React from 'react';
import IoIcon from 'react-native-vector-icons/Ionicons'
import MciIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../../global/theme';
import { UserProps } from '../../global/types/users';

import {
    Container,
    UserProfile,
    InitialLetterUser,
    RowView,
    ColumnView,
    Name,
    UserContainer,
    UserName,
    Title,
    Website,
    Location,
    Email,
    Company
} from './styles';

type Props = {
    Author: UserProps
}

const AuthorModalContent: React.FC<Props> = ({ Author: user }) => {
    return (
        <Container>

            <UserProfile>
                <InitialLetterUser>{user.name.slice(0, 1)}</InitialLetterUser>
            </UserProfile>
            <ColumnView>
                <Name>{user.name}</Name>
                <RowView>
                    <IoIcon name="md-person" color={theme.primary.light} size={12} />
                    <UserName>{user.username}</UserName>
                </RowView>
            </ColumnView>
            <Title>Contact</Title>
            <RowView>
                <MciIcon name="web" color={theme.primary.light} size={12} />
                <Website>{user.website}</Website>
            </RowView>
            <RowView>
                <MciIcon name="email" color={theme.primary.light} size={12} />
                <Email>{user.email.toLowerCase()}</Email>
            </RowView>
            <Title>Address</Title>
            <RowView>
                <MciIcon name="google-maps" color={theme.primary.light} size={12} />
                <Location>{user.address.city}</Location>
            </RowView>
            <RowView>
                <MciIcon name="google-maps" color={theme.primary.light} size={12} />
                <Location>Zipcode: {user.address.zipcode}</Location>
            </RowView>
            <RowView>
                <MciIcon name="google-maps" color={theme.primary.light} size={12} />
                <Location>Street: {user.address.street}</Location>
            </RowView>
            <RowView>
                <MciIcon name="google-maps" color={theme.primary.light} size={12} />
                <Location>Suite: {user.address.suite}</Location>
            </RowView>
            <Title>Business</Title>
            <RowView>
                <IoIcon name="ios-business" color={theme.primary.light} size={12} />
                <Company>{user.company.name}</Company>
            </RowView>


        </Container>
    );
}

export default AuthorModalContent;