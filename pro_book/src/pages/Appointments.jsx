import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Appointments = () => {
    const [appointments, setAppointments] = useState([])

    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState('')

    const [display, setDisplay] = useState('client')

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/appointments/')
            .then(response => {
                setAppointments(response.data)
                console.log('Appointments:', response.data)
            })
            .catch(error => console.error('Error fetching appointments', error))
    }, [])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/users/')
            .then(response => {
                setUsers(response.data)
                console.log('Users:', response.data)
            })
            .catch(error => console.error('Error fetching users', error))
    }, [])

    const handleToggleDisplay = (event) => {
        setDisplay(event.target.checked ? 'pro' : 'client')
    }

    const handleUserSelect = (e) => {
        setSelectedUser(e.target.value)
        console.log('Set User:', e.target.data)
    }

    const renderUserOptions = () => {
        return users.filter(user =>
            display === 'client' ? !user.is_pro : user.is_pro)
            .map(user => (
                <option key={user.id} value={user.id}>{user.username}</option>
            ))
    }

    const filterAppointments = () => {
        return appointments.filter(appointment =>
            display === 'client' ? `${appointment.client}` === selectedUser : `${appointment.professional}` === selectedUser
        )
    }

    return (
        <div>
            <h2>Schedule</h2>
            <div>
                <label>
                    Pro/Client Display:
                    <input type="checkbox" checked={display === 'pro'} onChange={handleToggleDisplay} />
                </label>
            </div>
            <div>
                <select value={selectedUser} onChange={handleUserSelect}>
                    <option value="">Select User: {display}</option>
                    {renderUserOptions()}
                </select>
                {filterAppointments().map(appointment => (
                    <ul key={appointment.id}>
                        <li>Appointment ID: {appointment.id}</li>
                        <li>client: {appointment.client}</li>
                        <li>Pro: {appointment.professional}</li>
                        <li>Service: {appointment.service}</li>
                        <li>Date/Time: {appointment.date_time}</li>
                        <li>Status: {appointment.status}</li>
                    </ul>

                ))}
            </div>

        </div>
    )
}

export default Appointments