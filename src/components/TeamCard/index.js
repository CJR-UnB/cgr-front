import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, CardHeader, CardBody } from './styles'

export default function TeamCard({id, title, members}){

    const history = useHistory()

    const handleSubmit = (id) => {
        // history.push(`/team/${id}`)
        history.push(`/teams/`)
    }

    return(
        <Card onClick={() => handleSubmit(id)} >
            <CardHeader>{title}</CardHeader>
            <CardBody>{members}</CardBody>
        </Card>
    )
}