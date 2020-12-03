import React, { useContext, useState } from 'react'
import {
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Input from '../../components/Input'
import Button from '../../components/Button'

import UsersContext from '../../context/UsersContext'

import { Container } from './styles'

import { IRequest } from '../../models/request.interface'

interface INewRequestProps {
    route: {
        params: {
            requestItem: IRequest
            isNewRequest: boolean
        }
    }
}

const NewRequest = ({ route }: INewRequestProps): JSX.Element => {
    const { state, dispatch } = useContext(UsersContext)

    const navigation = useNavigation()

    const [currentRequest, setCurrentRequest] = useState<IRequest>(route.params.requestItem)
    const [formError, setFormError] = useState<boolean>(false)

    function handleSubmit() {
        if (currentRequest.name.length < 1) {
            setFormError(true)
            console.error('Dê um nome ao pedido')
        } else {
            if (currentRequest.id === 0) {
                dispatch({
                    type: 'CREATE_REQUEST',
                    payload: {
                        ...currentRequest,
                        id: Math.random()
                    }
                })
            } else {
                dispatch({
                    type: 'UPDATE_REQUEST',
                    payload: currentRequest
                })
            }

            Alert.alert(
                'Concluído!',
                'Pedido salvo com sucesso'
            )
            navigation.goBack()
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1 }}
            >
                <Container>
                    <Input
                        icon="clipboard"
                        error={formError}
                        placeholder="Pedido"
                        value={currentRequest.name}
                        onChangeText={name => setCurrentRequest({ ...currentRequest, name })}
                    />

                    <Button
                        onPress={() => handleSubmit()}
                    >
                        Salvar
                    </Button>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

export default NewRequest
