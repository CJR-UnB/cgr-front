import React, { useState, useEffect } from 'react';

import AddButton from 'components/AddButton';
import NavButtons from 'components/NavButtons';
import Sidebar from 'components/Sidebar';
import TeamCard from 'components/TeamCard';
import { getAllTeams } from 'services/requests';

import { Page, Container, Title, Content, Teams } from './styles';

export default function TeamsIndex() {
  const [teams, setTeams] = useState();

  useEffect(() => {
    getAllTeams().then((res) => setTeams(res.data));
  }, []);

  return (
    <Page>
      <Sidebar />
      <Container>
        <NavButtons page='Equipes' />
        <Content>
          <Title>Equipes</Title>
          <Teams>
            {teams &&
              teams.map((team) => (
                <TeamCard
                  id={team.id}
                  key={team.id}
                  title={team.name}
                  members='zé ninguém'
                />
              ))}
          </Teams>
        </Content>
        <AddButton />
      </Container>
    </Page>
  );
}
