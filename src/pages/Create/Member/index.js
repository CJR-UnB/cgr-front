import React, { useState, useEffect } from 'react';
import { Page, Container, Content } from './styles';
import { postMembers, getMembers, getTeams, getTeam } from '../../../requests';
import {Form, FormGroup, FormInput, FormSelect, Button, ButtonGroup, Card, CardBody} from 'shards-react'
import ReturnButton from '../../../components/ReturnButton';
import Sidebar from '../../../components/Sidebar';

export default function RegisterMember() {
  const [members, setMembers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [newMember, setNewMember] = useState({
    member: {
      name: null,
    },
    role_id: '',
  });
  const [selectedTeams, setSelectedTeams] = useState({
    roles: [
      {
        id: '',
        name: null,
      },
    ],
  });
  

  function createMember(e) {
    e.preventDefault();
    postMembers(newMember)
      .then(() => {
        console.log('uhul');
        alert('Membro criado com sucesso');
      })
      .catch((err) => {
        console.log(err.response, newMember);
      });
  }

  function handleTeam(e) {
    const selectedIndex = e.target.options.selectedIndex;
    const teamId = e.target.options[selectedIndex].getAttribute('data-key');

    getTeam(teamId).then((res) => {
      setSelectedTeams(...res.data);
    });
  }

  function handleRole(e) {
    const selectedIndex = e.target.options.selectedIndex;
    setNewMember({
      ...newMember,
      role_id: e.target.options[selectedIndex].getAttribute('data-key'),
    });
  }

  function addRole() {
    
  }

  useEffect(() => {
    getMembers().then((res) => {
      setMembers(res.data);
      console.log(res);
    });
    getTeams().then((res) => {
      setTeams(res.data);
      console.log(res);
    });
  }, []);

  const TeamCard = (id) => {
    const teamId = id

    return(
    <Card style={{marginBottom: '1rem'}}>
              <CardBody>
                <FormGroup>
                  <label htmlFor="#team">Equipe</label>
                  <FormSelect 
                  id="#team"
                  onChange={(e) => handleTeam(e)}>
                    {teams.map((team) => (
                      <option value={team.name} key={team.id} data-key={team.id}>
                        {team.name}
                      </option>
                    ))}
                  </FormSelect>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#">Cargo</label>
                  <FormSelect onChange={(e) => handleRole(e)}>
                    {selectedTeams.roles.map((role) => (
                      <option key={role.id} data-key={role.id}>
                        {role.name}
                      </option>
                    ))}
                  </FormSelect>
                </FormGroup>
              </CardBody>
            </Card>
    )
  }

  return (
    <Page>
      <Sidebar />
      <Container>
        <ReturnButton />
        <Content>
          <h2>Novo Membro</h2>
          <Form style={{maxWidth: '25rem'}} onSubmit={createMember}>
            <FormGroup>
              <label htmlFor="#name">Nome</label>
              <FormInput 
              id="#name" 
              placeholder="Nome" 
              value={newMember.member.name}
              onChange={(e) =>
                setNewMember({ ...newMember, member: { name: e.target.value } })
              }
              />
            </FormGroup>
            
            {
              selectedTeams.roles.map((team) => (
                <TeamCard id={team.id}/>
              ))
            }

            <ButtonGroup style={{justifySelf: 'center', marginBottom: '1rem'}}>
              <Button size="sm">Adicionar Equipe</Button>          
              <Button theme="danger">Remover Equipe</Button>          
            </ButtonGroup>

            <Button type="submit">Criar Membro</Button>
          </Form>

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
