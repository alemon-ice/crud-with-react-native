import 'react-native-gesture-handler'

import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './routes'
import { UsersProvider } from './context/UsersContext'

const App: React.FC = () => {
    return (
        <UsersProvider>
            <NavigationContainer>
                <StatusBar barStyle="light-content" backgroundColor='#000' />
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <Routes />
                </View>
            </NavigationContainer>
        </UsersProvider>
    )
}

export default App
