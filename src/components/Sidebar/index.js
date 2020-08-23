import React from 'react'
import Logo from '../../assets/CjrLogo.png'
import { Container, Menu, Item } from './styles'

export default function Sidebar(){
    return(
        <Container>
            <img src={Logo} alt={'Logo CJR'} />
            <Menu>
                <Item>Dashboard</Item>
                <Item>Eventos</Item>
                <Item>Reuniões</Item>
                <Item>Horas</Item>
                <Item>Equipes</Item>
            </Menu>
        </Container>
    )
}