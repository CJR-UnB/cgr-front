import React from 'react';
import { Link } from 'react-router-dom';
import { TabsContainer, Tab } from './styles';

export default function NavButtons({ page }) {
  const tabItems = [
    { name: 'Equipes', route: '/teams' },
    { name: 'Membros', route: '/' },
  ];

  return (
    <TabsContainer>
      {tabItems.map((tab) => (
        <Tab
          style={page === tab.name ? { borderBottom: '2px solid #454555' } : {}}
          key={tab.name}
        >
          <Link
            to={tab.route}
            style={{ textDecoration: 'none', color: '#454555' }}
          >
            {tab.name}
          </Link>
        </Tab>
      ))}
    </TabsContainer>
  );
}
