import styled from "styled-components";

interface Props {
    sidebar: boolean;
}

export const Container = styled.div<Props>`
    background-color: #222345;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    width: 300px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;

    > svg {
        position: fixed;
        color: #aa33b5;
        width: 32px;
        height: 32px;
        margin: 32px 0 0 32px;
        cursor: pointer;
    }

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 300px;
        }
    }
`

export const Content = styled.div`
    margin-top: 100px;
`

