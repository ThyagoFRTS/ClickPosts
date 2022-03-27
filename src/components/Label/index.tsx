import React from 'react';
import { View } from 'react-native';

import { CustomLabel } from './styles';

type Props = {
    label: string,
}

const Label: React.FC<Props> = ({label}) => {
    return (
        <CustomLabel>{label}</CustomLabel>
    );
}

export default Label;