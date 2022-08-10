import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  
`;

export const Content = styled.div`
    display: flex;
    background-color: #222345;
    padding: 1rem;
    color: white;

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
    box-shadow: 0 0 2px 1px black;
    height: 128px;
    width: 128px;
    margin: 0 1rem 0 0;
`

export const ActionContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    > svg {
        color: #aa33b5;
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
`
