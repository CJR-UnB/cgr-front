import React, { useEffect, useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


import AddButton from 'components/AddButton';
import NavButtons from 'components/NavButtons';
import Sidebar from 'components/Sidebar';
import { getAllMembers, deleteMember } from 'services/requests';

import {
  Page,
  Container,
  Content,
  Title,
  Icons,
  DeleteIcon,
  EditIcon,
} from './styles';

export default function MembersIndex() {
  const [members, setMembers] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalMember, setModalMember] = useState({
    name: null,
    id: null,
  });

  useEffect(() => {
    getAllMembers().then((res) => {
      setMembers(res.data);
      console.log(res.data);
    });
  }, []);

  const fetchMembers = () => {
    getAllMembers().then((res) => {
      setMembers(res.data);
    });
  };

  function handleDelete(id) {
    deleteMember(id)
      .then((res) => {
        console.log(res);
        fetchMembers();
        setModalShow(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function DeleteMemberModal({ onHide, ...props }) {
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Calma aê</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tem certeza que deseja excluir o membro {modalMember.name}?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={onHide}>
            Cancelar
          </Button>
          <Button
            variant='primary'
            onClick={() => handleDelete(modalMember.id)}
          >
            Sim, excluir
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Page>
      <Sidebar />
      <Container>
        <NavButtons page='Membros' />

        <Content>
          <Title>Membros</Title>

          <Accordion className='list'>
            {members.map((member) => (
              <Card key={member.id}>
                <Accordion.Toggle
                  className='cardHeader'
                  as={Card.Header}
                  eventKey={member.id}
                >
                  {member.name}
                  <Icons>
                    <EditIcon />
                    <DeleteIcon
                      onClick={() => {
                        setModalShow(true);
                        setModalMember(member);
                      }}
                    />
                  </Icons>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={member.id}>
                  <Card.Body>
                    Equipe(s):{' '}
                    {member.teams.map((team) => (
                      <span key={team.id}>{team.name}</span>
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>

          <DeleteMemberModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Content>

        <AddButton />
      </Container>
    </Page>
  );
}
