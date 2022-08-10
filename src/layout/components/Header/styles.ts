import styled from 'styled-components'

export const Container = styled.div`
    height: 100px;
    width: 100vw;
    background-color: #14152c;
    box-shadow: 0 0 20px 3px;
    position: fixed;
    
    > svg {
        position: fixed;
        color: #aa33b5;
        width: 32px;
        height: 32px;
        margin: 32px 0 0 32px;
        cursor: pointer;
    }

    > span {
        position: fixed;
        margin: 36px 0 0 80px;
        font-size: larger;
        color: white;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`