import React from 'react';
import { Text, View } from 'react-native';
import AuthorList from '../AuthorList';

import { Container } from './styles'


type Props = {
    goBack?: () => void;
}

const ModalContent: React.FC<Props> = ({ goBack }) => {

    return (
        <Container >
            

        </Container>
    )
}

export default ModalContent;