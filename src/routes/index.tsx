import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Feather'
import { Button } from 'react-native-elements'

import RequestsList from '../pages/RequestsList'
import NewRequest from '../pages/NewRequest'

import { voidRequestItem } from '../utils/consts'

const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => {
    return (
        <Auth.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#74b439' },
                headerTintColor: '#fff',
                cardStyle: { backgroundColor: '#fff' }
            }}
            initialRouteName={'RequestsList'}
        >
            <Auth.Screen
                name="RequestsList"
                component={RequestsList}
                options={({ navigation }) => {
                    return {
                        title: 'Lista de Pedidos',
                        // eslint-disable-next-line react/display-name
                        headerRight: () => (
                            <Button
                                type="clear"
                                icon={<Icon name="plus" size={25} color="white" />}
                                onPress={() => navigation.navigate('NewRequest', { requestItem: voidRequestItem, isNewRequest: false })}
                            />
                        )
                    }
                }}
            />
            <Auth.Screen
                name="NewRequest"
                component={NewRequest}
                options={({ navigation }) => {
                    return {
                        title: 'Pedido',
                        // eslint-disable-next-line react/display-name
                        headerLeft: () => (
                            <Button
                                type="clear"
                                icon={<Icon name="arrow-left" size={25} color="white" />}
                                onPress={() => navigation.navigate('RequestsList')}
                            />
                        )
                    }
                }}
            />
        </Auth.Navigator>
    )
}

export default AuthRoutes
