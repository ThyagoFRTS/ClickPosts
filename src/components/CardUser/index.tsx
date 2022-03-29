import React from 'react';
import { UserProps } from '../../global/types/users';
import IoIcon from 'react-native-vector-icons/Ionicons'
import MciIcon from 'react-native-vector-icons/MaterialCommunityIcons'
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
    InitialLetterUser,
    RowView
} from './styles';
import { theme } from '../../global/theme';


const CardUser: React.FC<UserProps> = (props) => {
    
    return (
        <Container>
            <Card>
                <CenteredView>
                    <UserProfile>
                        <InitialLetterUser>{props.name.slice(0, 1)}</InitialLetterUser>
                    </UserProfile>
                    <RowView>
                        <IoIcon name="ios-business" color={theme.primary.light} size={12} />
                        <Company>{props.company.name}</Company>
                    </RowView>
                </CenteredView>
                <UserInfo>
                    <RowView>
                        <IoIcon name="md-person" color={theme.primary.light} size={12} />
                        <Name>{props.name}</Name>
                    </RowView>
                    <RowView>
                        <MciIcon name="web" color={theme.primary.light} size={12}/>
                        <Website>{props.website}</Website>
                    </RowView>
                    <RowView>
                        <MciIcon name="email" color={theme.primary.light} size={12}/>
                        <Email>{props.email}</Email>
                    </RowView>
                    <RowView>
                        <MciIcon name="google-maps" color={theme.primary.light} size={12}/>
                        <City>{props.address.city}</City>
                    </RowView>
                    
                </UserInfo>
            </Card>
        </Container>
    );
}

export default CardUser;