interface UserItem {
    id: number
    name: string
    username: string
    password: string
    role: 'admin' | 'user'
}
export const UserItems : UserItem[] = [
    {id: 1,name: "Budi Galaxy",username: "Budi",password: "password123",role: "admin"},
    {id: 2,name: "Peter Parker",username: "Peter",password: "1sampai8",role: "user"},
    {id:3, name: "Fadhil Ahmad Alrisqy",username: "fadhil", password: "123456", role: "admin"},
    {id:4,name: "BOS MUDA",username:"admin",password:"admin",role:"admin"},
    
]