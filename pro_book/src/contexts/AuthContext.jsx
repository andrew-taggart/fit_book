import React, { createContext, useContext, useState, useEffect } from 'react'
import { login, getCurrentUser } from '../api/authService'

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(getCurrentUser)

    useEffect(() => {
        setCurrentUser(getCurrentUser())
    }, [])

    const handleLogin = async (username, password) => {
        try {
            const userData = await login(username, password)
            setCurrentUser(userData)
        } catch (error) {
            console.error("Login failed:", error)
        }
    }

    // Logout function to clear the user from local storage and state
    const handleLogout = () => {
        localStorage.removeItem('user')
        setCurrentUser(null)
    }

    const value = {
        currentUser,
        login: handleLogin,
        logout: handleLogout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}