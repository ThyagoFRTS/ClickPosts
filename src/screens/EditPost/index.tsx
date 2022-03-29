import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import Input from '../../components/Input';
import InputArea from '../../components/InputArea';
import Label from '../../components/Label';
import { RootStackParamList } from '../../global/types/navigation';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import MciIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import {
    ButtonContainer,
    ScrollContainer,
    HorizontalView,
    IconContainer,
    IconView,
    UserSelect,
    UserSelectView
} from './styles';
import { theme } from '../../global/theme';
import { removePost, updatePost } from '../../storage/ducks/posts/postsSlicer';
import { PostProps } from '../../global/types/post';

type NavProps = NativeStackScreenProps<RootStackParamList, 'EditPost'>


const EditPost: React.FC<NavProps> = ({ navigation, route }) => {
    const params = route.params as PostProps
    const [body, setBody] = useState<string>(params!.body)
    const [title, setTitle] = useState<string>(params!.title)
    const user = useAppSelector(state => state.users.users.find(item => item.id == params!.userId))

    const [openModal, setOpenModal] = useState(false);
    const dispatch = useAppDispatch()


    function handleOpenModal() {
        setOpenModal(true);
    }

    function handleCloseModal() {
        setOpenModal(false);
    }


    const save = () => {
        dispatch(updatePost({ ...params, title: title, body: body }))
        setBody('')
        setTitle('')
        navigation.goBack()
    }

    const cancel = () => {
        navigation.goBack()
    }

    const onDelete = () => {
        dispatch(removePost(params!.id))
        setBody('')
        setTitle('')
        navigation.goBack()
    }

    return (

        <ScrollContainer contentContainerStyle={{ alignItems: 'center' }}>

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
            <IconView>
                <IconContainer onPress={onDelete}>
                    <MciIcon name="trash-can" color={theme.white} size={30} />
                </IconContainer>
            </IconView>

            <ButtonContainer>

                <CustomButton label='Save' onPress={save} />
                <CustomButton label='Cancel' onPress={cancel} />
            </ButtonContainer>
        </ScrollContainer>

    );
}

export default EditPost;