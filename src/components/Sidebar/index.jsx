import React, { useState } from 'react';
import {
  FiUser,
  FiCalendar,
  FiBriefcase,
  FiClock,
  FiUsers,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Logo from '../../assets/CjrLogo.png';
import {
  Container,
  ContainerShadow,
  Menu,
  Item,
  Icon,
  ArrowLeft,
  HiddenMenu,
  HiddenItem,
  ArrowRight,
} from './styles';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  if (showSidebar) {
    return (
      <>
        <Container>
          <img src={Logo} alt='Logo CJR' />
          <Menu>
            <Item>
              <Icon>
                <FiUser />
              </Icon>
              Perfil
            </Item>
            <Item>
              <Icon>
                <FiCalendar />
              </Icon>
              Eventos
            </Item>
            <Item>
              <Icon>
                <FiBriefcase />
              </Icon>
              Reuniões
            </Item>
            <Item>
              <Icon>
                <FiClock />
              </Icon>
              Horas
            </Item>
            <Link
              to='/teams'
              style={{ textDecoration: 'none', color: '#878D97' }}
            >
              <Item>
                <Icon>
                  <FiUsers />
                </Icon>
                Equipes
              </Item>
            </Link>
          </Menu>
          <ArrowLeft onClick={() => setShowSidebar((prev) => !prev)} />
        </Container>
        <ContainerShadow />
      </>
    );
  }

  return (
    <>
      <Container style={{ width: '4vw', padding: '5% 0px' }}>
        <img src={Logo} alt='Logo CJR' />
        <HiddenMenu>
          <HiddenItem>
            <FiUser />
          </HiddenItem>
          <HiddenItem>
            <FiCalendar />
          </HiddenItem>
          <HiddenItem>
            <FiBriefcase />
          </HiddenItem>
          <HiddenItem>
            <FiClock />
          </HiddenItem>
          <Link
            to='/teams'
            style={{ textDecoration: 'none', color: '#878D97' }}
          >
            <HiddenItem>
              <FiUsers />
            </HiddenItem>
          </Link>
        </HiddenMenu>
        <ArrowRight onClick={() => setShowSidebar((prev) => !prev)} />
      </Container>
      <ContainerShadow style={{ width: '4vw' }} />
    </>
  );
}
