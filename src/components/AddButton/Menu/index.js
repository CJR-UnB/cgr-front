import React from 'react'
import { Container, Option } from './styles'
import { useHistory } from 'react-router-dom'

export default function Menu(){

    let history = useHistory()

    return(
        <Container>
            <Option onClick={() => history.push('/register/member')}>Adicionar Membro</Option>
            <Option>Criar Equipe</Option>
        </Container>
    )
}