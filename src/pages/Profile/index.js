import React, { useEffect, useState } from 'react'
import { getMembers } from '../../Requests'
import { Page, Content, Header } from './styles'
import Sidebar from '../../components/Sidebar'

export default function Profile(){

    const [members, setMembers] = useState([])

    useEffect(() => {
        getMembers().then((res) => {
            setMembers(res.data)
            console.log(res)
        })
    })

    return(
        <Page>
            <Sidebar/>
            <Content>
                <Header>
                    oi
                    {members.name}
                    <ul>
                    {members.map((member) => (
                        <li key={member.id}>{member.name}</li>
                    ))}
                    </ul>
                </Header>
                
            </Content>
        </Page>
    )
}