import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ClientReview = () => {
    const [users, setUsers] = useState([])
    const [professions, setProfessions] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/professions/')
            .then(response => {
                setProfessions(response.data)
            })
            .catch(error => console.error('Error fetching user profiles', error))

        axios.get('http://127.0.0.1:8000/users/?is_pro=true')
            .then(response => {
                setUsers(response.data)
            })
            .catch(error => console.error('Error fetching user profiles', error))
    }, [])

    const getProfessionById = (professionId) => {
        const profession = professions.find(prof => prof.id === professionId)
        return profession ? profession.title : 'Not Found/Listed'
    }

    return (
        <div>
            <h2>Client Review</h2>
            {users.map(user => (
                <ul key={user.id}>
                    <li>Username: {user.username}</li>
                    <li>Email: {user.email}</li>
                    <li>Name: {user.first_name} {user.last_name}</li>
                    <li>Profession: {getProfessionById(user.profession)}</li>
                </ul>

            ))}
        </div>
    )
}

export default ClientReview