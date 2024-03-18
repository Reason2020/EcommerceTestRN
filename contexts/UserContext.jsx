import { createContext, useState } from "react"

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <UserContext.Provider value={{ username, password, setUsername, setPassword }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider