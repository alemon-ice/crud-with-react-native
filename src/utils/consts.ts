import { IRequest } from '../models/request.interface'

export const voidRequestItem: IRequest = {
    id: 0,
    name: '',
    status: 'Pedido Recebido',
    frigorifico_id: 0,
    usuario_id: 0
}

export const requests: IRequest[] = [
    {
        id: 1,
        name: 'pedido1',
        status: 'Pedido Entregue',
        frigorifico_id: 1,
        usuario_id: 1
    },
    {
        id: 2,
        name: 'pedido2',
        status: 'Pedido Faturado',
        frigorifico_id: 1,
        usuario_id: 1
    },
    {
        id: 3,
        name: 'pedido3',
        status: 'Pedido Pago',
        frigorifico_id: 1,
        usuario_id: 1
    },
    {
        id: 4,
        name: 'pedido4',
        status: 'Pedido Recebido',
        frigorifico_id: 1,
        usuario_id: 1
    }
]
