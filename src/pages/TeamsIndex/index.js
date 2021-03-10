import React, { useState, useEffect } from 'react';
import { Page, Container, Title, Content, Teams } from './styles';
import Sidebar from '../../components/Sidebar';
import AddButton from '../../components/AddButton';
import NavButtons from '../../components/NavButtons';
import { getTeams } from '../../requests';
import TeamCard from '../../components/TeamCard';

export default function TeamsIndex() {
  const [teams, setTeams] = useState();

  useEffect(() => {
    getTeams().then((res) => setTeams(res.data));
  }, []);

  return (
    <Page>
      <Sidebar />
      <Container>
        <NavButtons page={'Equipes'} />
        <Content>
          <Title>Equipes</Title>
          <Teams>
            {teams &&
              teams.map((team) => (
                <TeamCard
                  id={team.id}
                  key={team.id}
                  title={team.name}
                  members={'zé ninguém'}
                />
              ))}
          </Teams>
        </Content>
        <AddButton />
      </Container>
    </Page>
  );
}
