import styled from 'styled-components'

export const Page = styled.div `
    background-color: #2971B4;
    color: #454555;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`
export const LoginBox = styled.div `
    width: 370px;
    height: 530px;
    background-color: white;
    box-sizing: border-box;
    padding: 60px 10px 40px;
    box-shadow: 0px 0px 15px rgba(45, 45, 45, 0.075);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img{
        width: 30%;
    }
`
export const Form = styled.div `
    margin-top: 20px;
    width: 80%;
`
export const LinkBox = styled.div `
    color: grey;
    display: flex;
    flex-direction: column;
    align-items: center;
`