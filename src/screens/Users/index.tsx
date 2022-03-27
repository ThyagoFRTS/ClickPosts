import React, { useEffect } from 'react';
import UserCardList from '../../components/CardUserList';
import LoadingIndicator from '../../components/LoadingIndicator';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUsersFromApi } from '../../storage/ducks/users/usersSlice';

import { Container } from './styles';

const Users: React.FC = () => {
    const { isLoading } = useAppSelector(state => state.users)
    
    return (
        <Container>
            {isLoading ?
                <LoadingIndicator />
                :
                <UserCardList />
            }
        </Container>
    );
}

export default Users;