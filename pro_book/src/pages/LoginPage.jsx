//double check lifetime access and refresh uses 
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/authService'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setCurrentUser } = useAuth()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const user = await login(username, password)
            setCurrentUser(user)
            navigate('/')
        } catch (error) {
            console.error("Login failed:", error.response?.data)
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p><Link to="/signup"> Create Account </Link></p>
        </div>
    )
}

export default LoginPage