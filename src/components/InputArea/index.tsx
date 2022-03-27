import React from 'react';
import {
    TextInputProps,
} from 'react-native';
import { CustomInputArea } from './styles';

type Props = TextInputProps & {
    setValue: (value: string) => void,
    value: string,
    overStyle?: any | null,
}

const InputArea: React.FC<Props> = ({ value, setValue, overStyle, ...rest }) => {
    return (
        <CustomInputArea
            {...rest}
            multiline
            numberOfLines={5}
            maxLength={100}
            textAlignVertical='top'
            value={value? value: ''}
            style={[overStyle]}
            onChangeText={value => setValue(value)}
        />
    );
}


export default InputArea;