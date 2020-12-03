import styled, { css } from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'

interface IContainerProps {
    isErrored: boolean
}

export const Container = styled.View<IContainerProps>`
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 60px;
    background: #fff;

    padding: 0 16px;
    margin-bottom: 8px;
    border-width: 2px;
    border-color: #74b439;
    border-radius: 10px;

    ${props => props.isErrored && css`
        border-color: #c53030;
    `};
`

export const TextInput = styled.TextInput`
    flex: 1;

    font-family: 'Roboto-Regular';
    font-size: 16px;
    color: #000;
`

export const Icon = styled(FeatherIcon)`
    margin-right: 16px;
`
