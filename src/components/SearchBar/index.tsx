import React from 'react';
import { TextInputProps } from 'react-native';

import { SearchInput } from './styles';

type Props = TextInputProps & {
    setValue: (value: string) => void,
    value: string,
    overStyle?: any | null,
}

const SearchBar: React.FC<Props> = ({ value, setValue, overStyle, ...rest }) => {
    return (
        <SearchInput
            {...rest}
            placeholder="Search here"
            value={value}
            style={[overStyle]}
            onChangeText={value => setValue(value)}
        />
    );
}

export default SearchBar;