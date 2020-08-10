import React, { useEffect, useState } from 'react'
import { getMembers } from '../../Requests'
import { Page, Sidebar, Content, Header } from './styles'

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