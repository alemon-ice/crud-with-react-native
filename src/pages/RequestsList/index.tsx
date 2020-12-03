import React, { useState, useContext } from 'react'
import {
    KeyboardAvoidingView,
    Platform,
    FlatList,
    Alert
} from 'react-native'
import { ListItem, Button as RNButton } from 'react-native-elements'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import UsersContext from '../../context/UsersContext'

import { Container } from './styles'

import { IRequest } from '../../models/request.interface'

const RequestsList: React.FC = () => {
    const { state, dispatch } = useContext(UsersContext)

    const navigation = useNavigation()

    function confirmRequestDeletion(request: IRequest) {
        Alert.alert(
            'Excluir pedido?',
            `Deseja excluir o pedido "${request.name}"?`,
            [
                {
                    text: 'Sim',
                    onPress() {
                        dispatch({
                            type: 'DELETE_REQUEST',
                            payload: request
                        })
                    }
                },
                {
                    text: 'Não'
                }
            ]
        )
    }

    function getActions(request: IRequest) {
        return (
            <>
                <RNButton
                    type="clear"
                    icon={<FeatherIcon name="edit" size={20} color="#74b439" />}
                    onPress={() => navigation.navigate('NewRequest', { requestItem: request, isNewRequest: false })}
                >
                    Editar
                </RNButton>
                <RNButton
                    type="clear"
                    icon={<FeatherIcon name="trash" size={20} color="#c53030" />}
                    onPress={() => confirmRequestDeletion(request)}
                >
                    Excluir
                </RNButton>
            </>
        )
    }

    function renderRequestItem({ item: request }: { item: IRequest }) {
        return (
            <ListItem
                containerStyle={{ backgroundColor: '#f0f0f0' }}
                titleStyle={{ color: '#000' }}
                subtitleStyle={{ color: '#000' }}
                key={request.id}
                title={request.name}
                subtitle={`Status: ${request.status}`}
                rightElement={getActions(request)}
            />
        )
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <Container>

                <FlatList
                    style={{
                        width: '100%',
                        backgroundColor: '#fff'
                    }}
                    keyExtractor={(request) => request.id.toString()}
                    data={state.requests}
                    renderItem={renderRequestItem}
                />
            </Container>
        </KeyboardAvoidingView>

    )
}

export default RequestsList
