import styled from "styled-components";

export const Container = styled.div`
    margin-top: 100px;
`

export const Form = styled.form`
    width: 100%;
    max-width: 700px;
    border-radius: 10px;
    background-color: #222345;
    padding: 1rem;
    box-shadow: 0 0 20px 0 rgb(0, 0, 0, 0.6);
    
    > h2 {
        color: #aa33b5
    }
    
    > label {
        color: white;
        margin-top: 2rem;

    }
    > span {
        color: #aa33b5;
        font-size: 12px;
    }
    
`

export const Input = styled.input`
    display: block;
    height: 32px;
    width: 100%;
    margin: 10px 0 32px 0;
    padding: 20px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 600;
`

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    padding: 0 20px;
`

export const ButtonStyled = styled.button`
    display: block;
    background-color: #aa33b5;
    color: white;
    font-size: 0.9rem;
    border-radius: 5px;
    border: 0px;
    height: 40px;
    cursor: pointer;
    padding: 0 40px;
    box-sizing: border-box;
`