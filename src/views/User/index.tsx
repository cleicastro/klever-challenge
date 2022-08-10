import * as React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaPencilAlt, FaTrash, FaSpinner } from 'react-icons/fa'

import { useGetUserQuery, useDeleteUserMutation } from '../../store/User/User.store'

import { ActionContent, Container, Content, UserAvatar } from './style'

const User: React.FC = () => {
    const params = useParams()
    const navigate = useNavigate()

    const { data, isLoading: isLoadingGet } = useGetUserQuery(Number(params.id))
    const [deleteUser, { isLoading }] = useDeleteUserMutation()

    const handleDeletetUser = async (idUser: number) => {
        try {
            const response = await deleteUser(idUser)
            if (response) {
                navigate('/user')
            } else {
                alert('Unable to complete the operation, please try later.')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleEditUser = (id: number) => navigate(`/user/update/${id}`)

    return (
        <Container>
            <Content>
                {isLoading || isLoadingGet && (
                    <FaSpinner className='spinner' color='white' />)
                }
                {data && (
                    <>
                        <header>
                            <h3>{data.name}</h3>
                            <p>Create At {Intl.DateTimeFormat('pt-br').format(new Date(data.createdAt))}</p>
                            <ActionContent>
                                <FaPencilAlt onClick={() => handleEditUser(data.id)} />
                                <FaTrash onClick={() => handleDeletetUser(data.id)} />
                            </ActionContent>
                        </header>
                        <UserAvatar src={data.avatar} />
                    </>
                )}
            </Content>
        </Container>
    )
}

export default User