export type IStatusOptions = 'Pedido Recebido' | 'Pedido Pago' | 'Pedido Faturado' | 'Pedido Entregue'

export interface INewRequest {
    name: string
    status: IStatusOptions
    usuario_id: number
    frigorifico_id: number
}

export interface IRequest {
    id: number
    name: string
    status: IStatusOptions
    usuario_id: number
    frigorifico_id: number
}
