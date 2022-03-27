import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getPostsFromApi } from '../storage/ducks/posts/postsSlicer';
import { UsersState } from '../storage/ducks/users/types';
import { getUsersFromApi } from '../storage/ducks/users/usersSlice';
import { MainRoutes} from './app.routes';

interface StateProps {
    users: UsersState;
}

type Props = StateProps;

const Routes: React.FC = () => {
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(getPostsFromApi())
        dispatch(getUsersFromApi())
    }, [])
    
    //const { user } = props;
    return (
        <NavigationContainer>
            <MainRoutes/>
        </NavigationContainer>
    );
}




export default Routes;