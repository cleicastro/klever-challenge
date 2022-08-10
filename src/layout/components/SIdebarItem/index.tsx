import * as React from 'react'
import { IconType } from 'react-icons'
import { useNavigate } from 'react-router-dom'

import { Container } from './styles'

interface Props {
    Icon: IconType;
    Text: string;
    url: string;
}

export const SidebarItem: React.FC<Props> = ({ Icon, Text, url }) => {
    const navigate = useNavigate()
    return (
        <Container onClick={() => navigate(url)}>
            <Icon />
            {Text}
        </Container>
    )
}