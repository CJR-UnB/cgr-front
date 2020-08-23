import React, { useState, useEffect } from 'react'
import { Page } from './styles'
import { postMembers, getMembers } from '../../../Requests'

export default function RegisterMember(){
    const [newMembers, setNewMembers] = useState({
        name: 'moi'
    })

    const [members, setMembers] = useState([])

    function createMember(e){
        e.preventDefault();
        postMembers(newMembers).then((res) => {
            console.log('uhul')
        })
        .catch(err => {
            alert('buuu')
        })
    }

    useEffect(() => {
        getMembers().then((res) => {
            setMembers(res.data)
            console.log(res)
        })
    },[])

    return(
        <Page>
            <form onSubmit={createMember}>
                <label>Name:</label><br/>
                <input type="text" value={members.name} onChange={e => setNewMembers({...members, name:e.target.value})}/><br/>
                <input type="submit"/>
            </form>
            <div>
                {members.name}
                <ul>
                {members.map((member) => (
                    <li key={member.id}>{member.name}</li>
                ))}
                </ul>
            </div>
        </Page>
    )
}