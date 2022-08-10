import * as React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useGetUserQuery, useAdduserMutation, useUpdateUserMutation } from '../../store/User/User.store'
import { ButtonStyled, Container, Form, FormWrapper, Input } from './style'
import { FaSpinner } from 'react-icons/fa'

type Inputs = {
    name: string,
    avatar: string
}

const schema = yup.object({
    name: yup.string()
        .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Name can only contain Latin letters.'
        )
        .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, 'Please enter your full name.').required(),
    avatar: yup.string().url('Please enter a valid URL').required()
}).required();

const FormUser: React.FC = () => {
    const params = useParams()

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    })

    const { data, isLoading: isLoadingGet } = useGetUserQuery(Number(params.id))
    const [addUser, { isLoading: isLoadingUpdate }] = useAdduserMutation()
    const [updateUser, { isLoading: isLoadingAdd }] = useUpdateUserMutation()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            if (params.id) {
                const response = await updateUser({ id: Number(params.id), name: data.name, avatar: data.avatar })
                console.log(response)
                if (!("error" in response)) alert('User updated successfully')
                else alert('Unable to complete the operation')
            } else {
                const response = await addUser(data)
                if (!("error" in response)) {
                    alert('User registered successfully')
                    reset({
                        name: '',
                        avatar: '',
                    })
                } else alert('Unable to complete the operation')
            }
        } catch (error) {
            console.error(error)
            alert('Unable to complete the operation')
        }
    }

    return (
        <Container>
            <FormWrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2>{data ? 'Update' : 'New'} User</h2>
                    <label htmlFor="name">Full Name:</label> <span>{errors.name?.message}</span>
                    <Input {...register('name')} defaultValue={data && data.name} />

                    <label htmlFor="avatar">Url Image:</label> <span>{errors.avatar?.message}</span>
                    <Input {...register("avatar")} defaultValue={data && data.avatar} />

                    {isLoadingUpdate || isLoadingAdd
                        ? (<FaSpinner className='spinner' color='white' />)
                        : (<ButtonStyled type='submit'>{data ? 'Update' : 'Save'}</ButtonStyled>)
                    }
                </Form>
            </FormWrapper>
        </Container>
    )
}

export default FormUser