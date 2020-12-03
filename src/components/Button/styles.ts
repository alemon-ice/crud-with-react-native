import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
    background: #74b439;
    border-radius: 10px;

    width: 100%;
    height: 60px;

    margin-top: 8px;

    justify-content: center;
    align-items: center;
`

export const ButtonText = styled.Text`
    font-family: 'Roboto-Bold';
    font-size: 16px;
    color: #fff;
`
