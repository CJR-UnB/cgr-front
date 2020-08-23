import React, { useEffect, useState } from 'react'
import { getMembers } from '../../Requests'
import { Page, Content, Header } from './styles'
import Sidebar from '../../components/Sidebar'
import Accordion from 'react-bootstrap/Accordion'
import { Card } from 'react-bootstrap'

export default function Profile(){

    const [members, setMembers] = useState([])

    useEffect(() => {
        getMembers().then((res) => {
            setMembers(res.data)
            console.log(res.data)
        })
    },[])

    return(
        <Page>
            <Sidebar/>
            <Content>
                <Header/>
                <Accordion>
                {members.map((member) => (                    
                    <Card key={member.id}>
                        <Accordion.Toggle as={Card.Header} eventKey={member.id}>
                        {member.name}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={member.id}>
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    ))}
                </Accordion>
            </Content>
        </Page>
    )
}