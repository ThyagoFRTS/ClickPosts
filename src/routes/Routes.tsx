import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { useAppSelector } from '../hooks/redux';
import { UsersState } from '../storage/ducks/users/types';
import { MainRoutes} from './app.routes';

interface StateProps {
    users: UsersState;
}

type Props = StateProps;

const Routes: React.FC = () => {
    //const { user } = props;
    return (
        <NavigationContainer>
            <MainRoutes/>
        </NavigationContainer>
    );
}




export default Routes;