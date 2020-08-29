import React, { useState, useEffect } from 'react'
import { Page } from './styles'
import { postMembers, getMembers, getTeams, getTeam } from '../../../Requests'

export default function RegisterMember(){
    const [newMembers, setNewMembers] = useState({
        member: {
            name: null,
        },
        role_id: ''
    })

    const [members, setMembers] = useState([])

    const [teams, setTeams] = useState([])

    const [selectedTeam, setSelectedTeam] = useState({
        roles:[{
            id: '',
            name: null
        }]
    })

    function createMember(e){
        e.preventDefault();
        postMembers(newMembers).then((res) => {
            console.log('uhul')
        })
        .catch(err => {
            console.log(err.response, newMembers)
        })
    }

    function handleTeam(e){
        const selectedIndex = e.target.options.selectedIndex
        const teamId = e.target.options[selectedIndex].getAttribute('data-key')

        getTeam(teamId).then((res) => {
            setSelectedTeam(res.data)
        })
    }

    function handleRole(e){
        const selectedIndex = e.target.options.selectedIndex
        setNewMembers({...newMembers, role_id:e.target.options[selectedIndex].getAttribute('data-key')})
    }

    useEffect(() => {
        getMembers().then((res) => {
            setMembers(res.data)
            console.log(res)
        })
    },[])

    useEffect(() => {
        getTeams().then((res) => {
            setTeams(res.data)
            console.log(res)
        })
    },[])

    return(
        <Page>
            <form onSubmit={createMember}>
                <label>Name:</label><br/>
                <input type="text" value={newMembers.member.name} onChange={e => setNewMembers({...newMembers, member: {name:e.target.value}})}/><br/>
                
                <label>Equipe:</label><br/>
                <select onChange={e => handleTeam(e)}>
                    <option value=''>Selecione uma Equipe</option>
                    {teams.map((team) => (
                        <option value={team.name} key={team.id} data-key={team.id} >{team.name}</option>
                    ))}
                </select><br/>
                
                <label>Cargo:</label><br/>
                <select onChange={e => handleRole(e)}>
                    <option value=''>Selecione um Cargo</option>
                    {selectedTeam.roles.map((role) => (
                        <option key={role.id} data-key={role.id} >{role.name}</option>
                    ))}
                </select><br/><br/>
                
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