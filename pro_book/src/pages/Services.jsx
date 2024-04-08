import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Services = () => {
    const [services, setServices] = useState([])
    const [professional, setProfessional] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [price, setPrice] = useState(false)

    useEffect(() => {
        const fetchServices = () => {
            axios.get('http://127.0.0.1:8000/services/')
                .then(response => {
                    setServices(response.data)
                })
                .catch(error => console.error('Error fetching Services', error))
        }

        fetchServices()
    }, [])
    return (
        <div>
            {services.map(service => (
                <ul key={service.id}>
                    <li>Service ID: {service.id}</li>
                    <li>title: {service.title}</li>
                    <li>Pro: {service.professional}</li>
                    <li>Description: {service.description}</li>
                    <li>Price: {service.price}</li>
                </ul>

            ))}
        </div>
    )
}

export default Services