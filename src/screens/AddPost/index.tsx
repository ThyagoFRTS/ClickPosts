import React, { useState } from 'react';
import { View } from 'react-native';
import Input from '../../components/Input';
import InputArea from '../../components/InputArea';
import Label from '../../components/Label';
import SearchBar from '../../components/SearchBar';

import { Container, HorizontalView } from './styles';

const AddPost: React.FC = () => {
    const [body, setBody] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [search, setSearch] = useState('')
    //<InputArea value={body} setValue={setBody} />
    return (
        <Container contentContainerStyle={{alignItems: 'center'}}>
            <HorizontalView>
                <Label label='Title' />
            </HorizontalView>
            <Input value={title} setValue={setTitle} />
            <HorizontalView>
                <Label label='Post Content'/>
            </HorizontalView>
            <InputArea value={body} setValue={setBody} />
            <HorizontalView>
                <Label label='Select User'/>
            </HorizontalView>
            <SearchBar value={search} setValue={setSearch}/>
        </Container>

    );
}

export default AddPost;