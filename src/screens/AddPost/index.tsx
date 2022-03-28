import React, { useState } from 'react';
import { View } from 'react-native';
import AuthorList from '../../components/AuthorList';
import Input from '../../components/Input';
import InputArea from '../../components/InputArea';
import Label from '../../components/Label';
import ModalView from '../../components/ModalView';
import SearchBar from '../../components/SearchBar';
import { UserProps } from '../../global/types/users';

import { Container, HorizontalView, UserSelect, ModalContent } from './styles';

const AddPost: React.FC = () => {
    const [body, setBody] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [search, setSearch] = useState('')
    const [user, setUser] = useState<UserProps>({} as UserProps)
    const [openModal, setOpenModal] = useState(false);

    function handleOpenModal  ()  {
        setOpenModal(true);
    }

    function handleCloseModal () {
        setOpenModal(false);
    }


    //

    return (
        <Container contentContainerStyle={{ alignItems: 'center' }}>
            <HorizontalView>
                <Label label='Select User' />
            </HorizontalView>
            <UserSelect onPress={handleOpenModal}>
                {user?.username}
            </UserSelect>
            <HorizontalView>
                <Label label='Title' />
            </HorizontalView>
            <Input value={title} setValue={setTitle} />
            <HorizontalView>
                <Label label='Post Content' />
            </HorizontalView>
            <InputArea value={body} setValue={setBody} />
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