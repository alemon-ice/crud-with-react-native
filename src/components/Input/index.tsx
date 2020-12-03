import React from 'react'
import { TextInputProps } from 'react-native'

import { Container, TextInput, Icon } from './styles'

interface IInputProps extends TextInputProps {
    icon: string
    error: boolean
}

const Input = ({ icon, error, ...rest }: IInputProps): JSX.Element => {
    return (
        <Container isErrored={error}>
            <Icon
                name={icon}
                size={20}
                color="#74b439"
            />
            <TextInput
                {...rest}
            />
        </Container>
    )
}

export default Input
