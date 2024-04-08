import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Appointments = () => {
    const [appointments, setAppointments] = useState([])
    const [client, setClient] = useState('')
    const [professional, setProfessional] = useState('')
    const [service, setService] = useState('')
    const [date_time, setDateTime] = useState('')
    const [status, setStatus] = useState(false)

    useEffect(() => {
        const fetchAppointments = () => {
            axios.get('http://127.0.0.1:8000/appointments/')
                .then(response => {
                    setAppointments(response.data)
                    console.log(response.data)
                })
                .catch(error => console.error('Error fetching appointments', error))
        }

        fetchAppointments()
    }, [])
    return (
        <div>
            {appointments.map(appointment => (
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
    )
}

export default Appointments