import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ServiceControl = () => {
  const [services, setServices] = useState([])
  const [users, setUsers] = useState([])
  const [selectedPro, setSelectedPro] = useState('')

  const [serviceDetails, setServiceDetails] = useState({
    title: '',
    description: '',
    duration: '',
    price: '',
  })

  useEffect(() => {
    fetchServices()
    fetchUsers()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/services/')
      setServices(response.data)
    } catch (error) {
      console.error('Error fetching Services:', error)
    }
  }

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/users/')
      const professionals = response.data.filter(user => user.is_pro === true)
      setUsers(professionals)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  const handleProSelect = (e) => {
    setSelectedPro(e.target.value)
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setServiceDetails(prev => ({
      ...prev,
      [name]: name === 'duration' ? `PT${value}M` : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (serviceDetails.id) {
        await axios.put(`http://127.0.0.1:8000/services/${serviceDetails.id}/`, {
          ...serviceDetails,
          professional: selectedPro,
        })
      } else {
        await axios.post('http://127.0.0.1:8000/services/', {
          ...serviceDetails,
          professional: selectedPro,
        })
      }
      setServiceDetails({
        title: '',
        description: '',
        duration: '',
        price: '',
      })
      fetchServices()
    } catch (error) {
      console.error('Error submitting the service:', error)
    }
  }

  const handleDelete = async (serviceId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/services/${serviceId}/`)
      fetchServices()
    } catch (error) {
      console.error('Error deleting service:', error)
    }
  }

  const filterServices = services.filter(service => service.professional.toString() === selectedPro)

  return (
    <div>
      <h2>Pro Service View</h2>
      <div>
        <select value={selectedPro} onChange={handleProSelect}>
          <option value="">Select Pro User</option>
          {users.map(user => (
            <option key={user.id} value={user.id.toString()}>{user.username}</option>
          ))}
        </select>
        <div>
          <form onSubmit={handleSubmit}>
            <input name="title" value={serviceDetails.title} onChange={handleInput} placeholder='Service Title' required />
            <input name="description" value={serviceDetails.description} onChange={handleInput} placeholder='Service Description' required />
            <input name="duration" value={serviceDetails.duration.replace(/\D/g,'')} onChange={handleInput} placeholder='Duration (minutes)' required />
            <input name="price" value={serviceDetails.price} onChange={handleInput} placeholder='Service Price ($$.00)' type='number' required />
            <button type="submit">Save Service</button>
          </form>
        </div>
      </div>
      {filterServices.map(filteredService => (
        <ul key={filteredService.id}>
          <li>Service ID: {filteredService.id}</li>
          <li>Title: {filteredService.title}</li>
          <li>Pro: {filteredService.professional}</li>
          <li>Description: {filteredService.description}</li>
          <li>Price: {filteredService.price}</li>
          <button onClick={() => handleDelete(filteredService.id)}>Delete</button>
        </ul>
      ))}
    </div>
  )
}

export default ServiceControl
