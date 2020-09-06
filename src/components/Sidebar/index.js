import React, { useState } from 'react'
import Logo from '../../assets/CjrLogo.png'
import { GoPencil } from 'react-icons/go'
import { Container, ContainerShadow, Menu, Item, ArrowLeft, HiddenMenu, HiddenItem, ArrowRight } from './styles'

export default function Sidebar(){
    const [showSidebar, setShowSidebar] = useState(true)

    if (showSidebar){
        return(
            <>
            <Container>
                <img src={Logo} alt={'Logo CJR'} />
                <Menu>
                    <Item>Dashboard</Item>
                    <Item>Eventos</Item>
                    <Item>Reuniões</Item>
                    <Item>Horas</Item>
                    <Item>Equipes</Item>
                </Menu>
                <ArrowLeft onClick={() => setShowSidebar(showSidebar => !showSidebar)}/>
            </Container>
            <ContainerShadow/>
            </>
        )        
    }
    else{
        return(
            <>
            <Container style={{width: '4vw', padding: '5% 5px'}}>
                <img src={Logo} alt={'Logo CJR'} />
                <HiddenMenu>
                    <HiddenItem><GoPencil/></HiddenItem>
                </HiddenMenu>
                <ArrowRight onClick={() => setShowSidebar(showSidebar => !showSidebar)}/>
            </Container>
            <ContainerShadow style={{width: '4vw'}}/>
            </>
        )
    }
}