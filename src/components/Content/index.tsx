import React, { ReactNode } from 'react';
import { Container } from './styles';

interface BaseContentProps {
    children?: ReactNode;
}

const Content: React.FC<BaseContentProps> = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    );
}

export default Content;