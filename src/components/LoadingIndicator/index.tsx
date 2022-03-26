import React from 'react';
import { View } from 'react-native';
import { theme } from '../../global/theme';

import { Container, Loading } from './styles';

const LoadingIndicator: React.FC = () => {
    return (
        <Container>
            <Loading  size="large" color={theme.terciary.pink}/>
        </Container>
        
    );
}

export default LoadingIndicator;