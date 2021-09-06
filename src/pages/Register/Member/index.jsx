import React, { useState, useEffect } from 'react';

import DefaultButton from 'components/DefaultButton';
import Input from 'components/Input';
import ReturnButton from 'components/ReturnButton';
import Sidebar from 'components/Sidebar';
import {
  createMember,
  getAllMembers,
  getAllTeams,
  getTeam,
} from 'services/requests';

import { Page, Container, Content } from './styles';

export default function RegisterMember() {
  const [newMember, setNewMember] = useState({
    member: {
      name: null,
    },
    role_id: '',
  });

  const [members, setMembers] = useState([]);

  const [teams, setTeams] = useState([]);

  const [selectedTeam, setSelectedTeam] = useState({
    roles: [
      {
        id: '',
        name: null,
      },
    ],
  });

  function handleCreateMember(e) {
    e.preventDefault();
    createMember(newMember)
      .then((res) => {
        console.log(res);
        alert('Membro criado com sucesso');
      })
      .catch((err) => {
        console.log(err.response, newMember);
      });
  }

  function handleTeam(e) {
    const { selectedIndex } = e.target.options;
    const teamId = e.target.options[selectedIndex].getAttribute('data-key');

    getTeam(teamId).then((res) => {
      setSelectedTeam(res.data);
    });
  }

  function handleRole(e) {
    const { selectedIndex } = e.target.options;
    setNewMember({
      ...newMember,
      role_id: e.target.options[selectedIndex].getAttribute('data-key'),
    });
  }

  useEffect(() => {
    getAllMembers().then((res) => {
      setMembers(res.data);
      console.log(res);
    });
  }, []);

  useEffect(() => {
    getAllTeams().then((res) => {
      setTeams(res.data);
      console.log(res);
    });
  }, []);

  return (
    <Page>
      <Sidebar />

      <Container>
        <ReturnButton />

        <Content>
          <h2>Novo Membro</h2>
          <form onSubmit={handleCreateMember}>
            <Input
              width='50%'
              label='Nome:'
              style={{ background: 'white' }}
              value={newMember.member.name}
              onChange={(e) =>
                setNewMember({ ...newMember, member: { name: e.target.value } })
              }
            />

            <label>Equipe:</label>
            <br />
            <select onChange={(e) => handleTeam(e)}>
              <option value=''>Selecione uma Equipe</option>
              {teams.map((team) => (
                <option value={team.name} key={team.id} data-key={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
            <br />

            <label>Cargo:</label>
            <br />
            <select onChange={(e) => handleRole(e)}>
              <option value=''>Selecione um Cargo</option>
              {selectedTeam.roles.map((role) => (
                <option key={role.id} data-key={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
            <br />
            <br />

            <DefaultButton text='Enviar' type='submit' />
          </form>
          <div>
            {members.name}
            <ul>
              {members.map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
            </ul>
          </div>
        </Content>
      </Container>
    </Page>
  );
}
