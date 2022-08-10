import * as React from 'react'
import { FaTimes, FaUserFriends, FaUserPlus } from 'react-icons/fa'
import { SidebarItem } from '../SIdebarItem'
import { Container, Content } from './styles'

interface Props {
    active: boolean,
    setActive: (active: boolean) => void
}

export const Sidebar: React.FC<Props> = ({ active, setActive }) => {
    const closeSidebar = () => setActive(false)

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <Content>
                <SidebarItem Text='Users' Icon={FaUserFriends} url="/user"/>
                <SidebarItem Text='New User' Icon={FaUserPlus} url="/user/new" />
            </Content>
        </Container>
    )
}