import * as React from 'react'
import { useNavigate } from 'react-router-dom';
import { User } from '../../../types';
import { Container, Content, UserAvatar } from './style';

type UserInfoProps = {
    user: User;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
    const navigate = useNavigate();
    return (
        <Container>
            <Content onClick={() => navigate(`/user/${user.id}`)}>
                <header>
                    <h3>{user.name}</h3>
                    <p>Create At {Intl.DateTimeFormat('pt-br').format(new Date(user.createdAt))}</p>
                </header>
                <UserAvatar src={user.avatar} />
            </Content>
        </Container>
    )
}