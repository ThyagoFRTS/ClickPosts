import React from 'react';
import { View } from 'react-native';
import { useAppSelector } from '../../hooks/redux';
import CardUser from '../CardUser';
import Post from '../Post';
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