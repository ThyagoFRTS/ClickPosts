import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import CardUser from '../CardUser';
import { CardList } from './styles';

const CardUserList: React.FC = () => {
    
    const users = useAppSelector(state => state.users.users)

    return (
        <CardList
            data={users}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => <CardUser key={item.id} {...item}/>}
        />
    );
}

export default CardUserList;