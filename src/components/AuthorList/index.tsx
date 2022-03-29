import React from 'react';
import { UserProps } from '../../global/types/users';
import { useAppSelector } from '../../hooks/redux';
import Author from '../Author';
import CardUser from '../CardUser';
import { List } from './styles';

type Props = {
    setUser: (user: UserProps) => void,
    goBack: () => void,
}

const AuthorList: React.FC<Props> = ({setUser, goBack}) => {
    
    const users = useAppSelector(state => state.users.users)

    return (
        <List
            data={users}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => <Author 
                                        key={item.id}
                                        setUser={setUser}
                                        user={item}
                                        goBack={goBack}
                                        />}
        />
    );
}

export default AuthorList;