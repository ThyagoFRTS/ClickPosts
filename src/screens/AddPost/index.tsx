import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { View } from 'react-native';
import AuthorList from '../../components/AuthorList';
import CustomButton from '../../components/CustomButton';
import Input from '../../components/Input';
import InputArea from '../../components/InputArea';
import Label from '../../components/Label';
import ModalView from '../../components/ModalView';
import SearchBar from '../../components/SearchBar';
import { RootBottomParamList } from '../../global/types/navigation';
import { UserProps } from '../../global/types/users';
import { useAppDispatch } from '../../hooks/redux';
import { addPost, createPost } from '../../storage/ducks/posts/postsSlicer';

import { Container, HorizontalView, UserSelect, UserSelectView } from './styles';

type Props = BottomTabScreenProps<RootBottomParamList, 'AddPost'>;

const AddPost: React.FC<Props> = ({navigation}) => {
    const [body, setBody] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [search, setSearch] = useState('')
    const [user, setUser] = useState<UserProps>({} as UserProps)
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useAppDispatch()


    function handleOpenModal() {
        setOpenModal(true);
    }

    function handleCloseModal() {
        setOpenModal(false);
    }


    const save = () => {
        dispatch(createPost(
            { title: title, body: body, userId: user.id }
        ))
        navigation.navigate('Posts')
    }

    return (
        <Container contentContainerStyle={{ alignItems: 'center' }}>
            <HorizontalView>
                <Label label='Select User' />
            </HorizontalView>
            <UserSelectView onPress={handleOpenModal}>

                <UserSelect >
                    {user?.username}
                </UserSelect>
            </UserSelectView>
            <HorizontalView>
                <Label label='Title' />
            </HorizontalView>
            <Input value={title} setValue={setTitle} />
            <HorizontalView>
                <Label label='Post Content' />
            </HorizontalView>
            <InputArea value={body} setValue={setBody} />
            <CustomButton label='Save' onPress={save} />
            <ModalView visible={openModal} closeModal={handleCloseModal} >
                <>
                    <SearchBar value={search} setValue={setSearch} />
                    <AuthorList setUser={setUser} goBack={handleCloseModal} />
                </>
            </ModalView>
        </Container>

    );
}

export default AddPost;