import React from 'react';
import logoImg from '../../assets/logo.svg';
import { 
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink
} from './styles';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu, 
} from 'react-icons/md';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                
                <MenuItemLink href="#">
                    <MdArrowUpward/>
                    Entrada
                </MenuItemLink>
                
                <MenuItemLink href="#">
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>
                
                <MenuItemLink href="#">
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;