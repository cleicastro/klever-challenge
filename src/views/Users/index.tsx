import * as React from 'react'

import { useGetUsersQuery } from '../../store/User/User.store'
import { UserInfo, UserList } from '../../components'

import { Container, Content } from './styles'
import { User } from '../../../types'

const Users: React.FC = () => {

    const { data = [] } = useGetUsersQuery()

    return (
        <Container>
            <Content>
                <UserList>
                    {data.map((user: User) => (
                        <UserInfo key={user.id} user={user} />
                    ))}
                </UserList>
            </Content>
        </Container>
    )
}

export default Users