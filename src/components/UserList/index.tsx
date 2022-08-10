import * as React from 'react'

import './style.css'

export const UserList: React.FC<{ children: JSX.Element | any }> = ({ children }) => {
    return (
        <ul>
            {children}
        </ul>
    )
}