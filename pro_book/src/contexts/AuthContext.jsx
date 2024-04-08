import React, { createContext, useContext, useState, useEffect } from 'react'
import { getCurrentUser } from '../api/authService'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const user = getCurrentUser()
        if (user) {
            setCurrentUser(user)
        }
    }, [])

    // Logout function to clear the user from local storage and state
    const logout = () => {
        localStorage.removeItem('user')
        setCurrentUser(null)
    }

    const value = {
        currentUser,
        setCurrentUser,
        logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}