import React, { createContext, Dispatch, useReducer } from 'react'
import { requests } from '../utils/consts'

import { IRequest } from '../models/request.interface'

type UsersContextState = {
    requests: IRequest[]
}

interface UsersContextData {
    state: UsersContextState
    dispatch: Dispatch<RequestAction>
}

interface RequestState {
    requests: IRequest[]
}

interface RequestAction {
    type: 'CREATE_REQUEST' | 'UPDATE_REQUEST' | 'DELETE_REQUEST'
    payload: IRequest
}

const initialState: { requests: IRequest[] } = {
    requests
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData)

// eslint-disable-next-line
export const UsersProvider: React.FC = ({ children }) => {
    function reducer(state: RequestState, action: RequestAction) {
        switch (action.type) {
            case 'DELETE_REQUEST':
                return {
                    ...state,
                    requests: state.requests?.filter(request => {
                        return request.id !== action.payload.id
                    })
                }
            case 'CREATE_REQUEST':
                return {
                    ...state,
                    requests: [
                        ...state.requests,
                        action.payload
                    ]
                }
            case 'UPDATE_REQUEST':
                return {
                    ...state,
                    requests: state.requests.map(request => request.id !== action.payload.id
                        ? request
                        : action.payload
                    )
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContext
