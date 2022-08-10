import * as React from 'react'
import { FaBars } from 'react-icons/fa'
import { Sidebar } from '../Sidebar'

import { Container } from './styles'

const Header: React.FC = () => {
    const [sidebar, setSidebar] = React.useState<boolean>(false)
    const showSidebar = () => setSidebar(value => !value)
    return (
        <Container>
            <FaBars onClick={showSidebar} />
            <span>Technical Challenge</span>
            {sidebar && <Sidebar active={sidebar} setActive={setSidebar} />}
        </Container>
    )
}

export default Header;