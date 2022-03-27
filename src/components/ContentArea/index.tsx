import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

import { SafeArea } from './styles';
type Props = SafeAreaViewProps & {
    children: ReactNode
}
const ContentArea: React.FC<Props> = ({children}) => {
    return (
        <SafeArea >
            {children}
        </SafeArea>
    );
}

export default ContentArea;