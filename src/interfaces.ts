export interface Paged<Data> {
    data: Data[]
}

export interface ChatInterface {
    id: string
    message: string
    user: string
    createdAt: Date
}