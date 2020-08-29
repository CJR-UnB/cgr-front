import React, { useEffect, useState } from 'react'
import { getMembers } from '../../Requests'
import { Page, Content } from './styles'
import Sidebar from '../../components/Sidebar'
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap'
import { FaRegTrashAlt } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useHistory } from 'react-router-dom'

export default function Profile(){

    const [members, setMembers] = useState([])

    let history = useHistory()

    useEffect(() => {
        getMembers().then((res) => {
            setMembers(res.data)
            console.log(res.data)
        })
    },[])

    // function handleDelete(id){
    //     deleteMembers(id).then((res) => {
    //         setMembers(res.data)
    //     })
    //     .catch(err => {
    //         alert('buuua')
    //     })
    // }

    return(
        <Page>
            <Sidebar/>
            <Content>
                <Accordion className={'list'}>
                {members.map((member) => (                    
                    <Card key={member.id}>
                        <Accordion.Toggle className={'cardHeader'} as={Card.Header} eventKey={member.id}>
                            {member.name}
                            <FaRegTrashAlt //onClick={() => handleDelete(member.id)} 
                            />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={member.id}>
                            <Card.Body>Equipe(s): {member.teams.map((team) => (
                                <p>{team.name}</p>
                            ))}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    ))}
                </Accordion>
                <BsFillPlusCircleFill className={'icon'} onClick={() => history.push('/register/member')}/>
            </Content>
        </Page>
    )
}