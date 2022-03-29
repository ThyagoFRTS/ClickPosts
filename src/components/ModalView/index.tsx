import React, { ReactNode } from 'react';
import {
    Modal,
    ModalProps,
    TouchableWithoutFeedback
} from 'react-native';


 import { TransparentView, Container } from './styles';

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
    small?: boolean;
}

const ModalView: React.FC<Props> = ({ children, closeModal, small=false, ...rest }) => {
    return (
        <Modal
            transparent
            animationType='slide'
            
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <TransparentView >
                    <Container>
                        {children}
                    </Container>
                </TransparentView>
            </TouchableWithoutFeedback>

        </Modal>
    );
}

export default ModalView;