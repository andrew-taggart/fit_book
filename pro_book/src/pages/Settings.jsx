//List Users to start and change after later dev stages
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Settings = () => {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [isPro, setIsPro] = useState(false)
    const [professionId, setProfessionId] = useState(null)

    useEffect(() => {
        const fetchUsers = () => {
            axios.get('http://127.0.0.1:8000/users/')
            .then(response => {
                setUsers(response.data)
            })
            .catch(error => console.error('Error fetching user profiles', error))
        }

        fetchUsers()
    }, [])
    return (
        <div>
            {users.map(user => (
                <ul key={user.id}>
                    <li>UserId: {user.id}</li>
                    <li>Username: {user.username}</li>
                    <li>Email: {user.email}</li> 
                    <li>Name: {user.first_name} {user.last_name}</li> 
                    <li>{user.is_pro ? "Pro" : "Client"}</li>
                </ul>
                
            ))}
        </div>
    )
}

export default Settings