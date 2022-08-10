export type User = {
    createdAt: Date;
    name: string;
    avatar: string;
    id: number;
}

export type MockDataResponse = {
    requestId: number
    items: User
    count: number
    anyKey: number
}