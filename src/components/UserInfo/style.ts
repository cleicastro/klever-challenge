import styled from "styled-components";

export const Container = styled.li`
    flex-basis: calc(25% - 1rem);
    flex-grow: 0;
    flex-shrink: 0;
    margin: 1rem 0 0 1rem;
    list-style: none;
    
    @media screen and (max-width: 992px) {
        flex-basis: calc(33.33% - 1rem);
    }

    @media screen and (max-width: 600px) {
        flex-basis: calc(100% - 1rem);
    }
`

export const Content = styled.div`
    display: flex;
    background-color: #222345;
    padding: 1rem;
    color: white;
    cursor: pointer;
    
    > header {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        order: 1;
        
        > h3 {
            font-size: 1.3em;
            margin: 0;
        }
    
        > p {
            margin: 0;
        }
    }
    
`

export const UserAvatar = styled.img`
    border-radius: 100%;
    box-shadow: 0 0 2px 1px black;
    height: 64px;
    width: 64px;
    margin: 0 1rem 0 0;
`