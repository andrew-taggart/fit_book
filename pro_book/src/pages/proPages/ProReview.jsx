import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProReview = () => {
    const [reviews, setReviews] = useState([])
    const [users, setUsers] = useState([])
    const [selectedPro, setSelectedPro] = useState('')

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/reviews/')
            .then(response => {
                setReviews(response.data)
            })
            .catch(error => console.error('Error fetching Reviews', error))

        axios.get('http://127.0.0.1:8000/users/')
            .then(response => {
                const professionals = response.data.filter(user => user.is_pro === true)
                setUsers(professionals)
            })
            .catch(error => console.error('Error fetching users', error))
    }, [])

    const handleProSelect = (e) => {
        setSelectedPro(e.target.value)
    }

    const filterReviews = reviews.filter(review => review.professional.toString() === selectedPro)

    return (
        <div>
            <h2>Pro Review</h2>
            <div>
                <select value={selectedPro} onChange={handleProSelect}>
                    <option value="">Select Pro User</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id.toString()}>{user.username}</option>
                    ))}
                </select>
            </div>
            <div>
                {filterReviews.map(filteredReview => (
                    <ul key={filteredReview.id}>
                        <li>Review ID: {filteredReview.id}</li>
                        <li>Client: {filteredReview.client}</li>
                        <li>Pro: {filteredReview.professional}</li>
                        <li>Rating: {filteredReview.rating}</li>
                        <li>Comment: {filteredReview.comment}</li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default ProReview
