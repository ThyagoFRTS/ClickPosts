import React from 'react';
import IOIcon from 'react-native-vector-icons/Ionicons'
import { switchColor } from '../../utils/colors';
import {
    IconContainer
} from './styles'; switchColor

type Props = {
    focused: boolean,
    name: string,
}

const TabBarButton: React.FC<Props> = ({ focused, name }) => {
    return (
        
            <IconContainer>
                <IOIcon name={name} color={switchColor(focused)} size={72} />

            </IconContainer>
        
    );
}

export default TabBarButton;