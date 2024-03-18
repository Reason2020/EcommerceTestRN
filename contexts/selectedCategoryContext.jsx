import { createContext, useState } from "react"

export const SelectedCategoryContext = createContext()

const SelectedCategoryContextProvider = ({ children }) => {
    const [ selectedCategory, setSelectedCategory ] = useState('All')

    return (
        <SelectedCategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            { children }
        </SelectedCategoryContext.Provider>
    )
}

export default SelectedCategoryContextProvider