import React from 'react';
import { View } from 'react-native';
import { UserProps } from '../../global/types/users';

import {
    Container,
    Card,
    Company,
    UserProfile,
    Name,
    Website,
    Email,
    City,
    UserInfo,
    CenteredView,
    InitialLetterUser
} from './styles';


const CardUser: React.FC<UserProps> = (props) => {
    return (
        <Container>
            <Card>
                <CenteredView>
                    <UserProfile>
                        <InitialLetterUser>{props.name.slice(0,1)}</InitialLetterUser>
                    </UserProfile>
                    <Company>{props.company.name}</Company>
                </CenteredView>
                <UserInfo>
                    <Name>{props.name}</Name>
                    <Website>{props.website}</Website>
                    <Email>{props.email}</Email>
                    <City>{props.address.city}</City>
                </UserInfo>
            </Card>
        </Container>
    );
}

export default CardUser;