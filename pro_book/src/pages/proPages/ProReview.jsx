import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProReview = () => {

    const [reviews, setReviews] = useState([])
    const [users, setUsers] = useState([])
    const [display, setDisplay] = useState('client')

    useEffect(() => {
        
        axios.get('http://127.0.0.1:8000/reviews/')
            .then(response => {
                setReviews(response.data)
            })
            .catch(error => console.error('Error fetching Reviews', error))
    }, [])

    return (
        <div>
            <h2>Pro Review</h2>
            <div>
                {reviews.map(review => (
                    <ul key={review.id}>
                        <li>Review ID: {review.id}</li>
                        <li>Client: {review.client}</li>
                        <li>Pro: {review.professional}</li>
                        <li>Rating: {review.Rating}</li>
                        <li>Comment: {review.comment}</li>
                    </ul>

                ))}
            </div>

        </div>
    )
}

export default ProReview




