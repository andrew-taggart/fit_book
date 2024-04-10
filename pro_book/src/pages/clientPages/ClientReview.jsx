import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ClientReview = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
       
            axios.get('http://127.0.0.1:8000/users/')
            .then(response => {
                setUsers(response.data)
            })
            .catch(error => console.error('Error fetching user profiles', error))
    }, [])

    return (
        <div>
            <h2>Client Review</h2>
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

export default ClientReview