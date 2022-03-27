import React from 'react';
import { TextInputProps } from 'react-native';

import { CustomInput } from './styles';

type Props = TextInputProps & {
    setValue: (value: string) => void,
    value: string,
    overStyle?: any | null,
}

const Input: React.FC<Props> = ({ value, setValue, overStyle, ...rest }) => {
    return (
        <CustomInput
            {...rest}
            value={value}
            //placeholder='Email'
            style={[overStyle]}
            //keyboardType='email-address'
            onChangeText={value => setValue(value)}
        />
    );
}

export default Input;