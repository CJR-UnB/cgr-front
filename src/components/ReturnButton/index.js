import React from 'react'
import { ButtonContainer, Icon } from './styles'
import { useHistory } from 'react-router-dom'

export default function ReturnButton(){

    let history = useHistory()

    return(
        <ButtonContainer onClick={() => history.push('/')}>
            <Icon/>
            Voltar
        </ButtonContainer>
    )
}