import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';

import { Container, TextButton } from './styles';

type Props =  TouchableOpacityProps & {
    label: string,
}

const CustomButton: React.FC<Props> = ({label, ...rest}) => {
  return(
    <Container
        {...rest}
    >
        <TextButton>
           {label}
        </TextButton>
    </Container>
  );
}

export default CustomButton;