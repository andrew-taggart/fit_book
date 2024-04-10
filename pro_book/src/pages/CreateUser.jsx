import React, { useState, useEffect } from 'react'
//import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateUser = () => {
    //const { currentUser } = useAuth()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        is_pro: false,
        profession: '',
    })

    const [professions, setProfessions] = useState([])

    useEffect(() => {
        const fetchProfessions = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/professions/')
                setProfessions(response.data)
            } catch (error) {
                console.error('Failed to fetch professions', error)
            }
        }

        fetchProfessions()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/users/', formData)
            console.log('User profile create successfully:', response.data)
            navigate('/')
        } catch (error) {
            console.error('Failed to create user profile:', error.response?.data)
        }
    }



    return (
        <div>
            <h2>Create User Profile</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li><label>
                        First Name:
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
                    </label></li>
                    <li><label>
                        Last Name:
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
                    </label></li>
                    <li><label>
                        Username:
                        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                    </label></li>
                    <li><label>
                        Password:
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </label></li>
                    <li><label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label></li>
                    <li><label>
                        Professional:
                        <input type="checkbox" name="is_pro" checked={formData.is_pro} onChange={(e) => setFormData({ ...formData, is_pro: e.target.checked })} />
                    </label></li>
                    <li><label>
                        Profession:
                        <select name="profession" value={formData.profession} onChange={handleChange}>
                            <option value="">Select Profession</option>
                            {professions.map((prof) => (
                                <option key={prof.id} value={prof.id}>{prof.title}</option>
                            ))}
                        </select>
                    </label></li>
                </ul>
                {/* Add other fields as needed */}
                <button type="submit">Create Profile</button>
                <p>Already have an account? <Link to="/login"> Login </Link></p>
            </form>
        </div>
    )
}

export default CreateUser
