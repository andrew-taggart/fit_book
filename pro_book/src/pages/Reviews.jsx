import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [professional, setProfessional] = useState('')
    const [client, setClient] = useState('')
    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')

    useEffect(() => {
        const fetchReviews = () => {
            axios.get('http://127.0.0.1:8000/reviews/')
                .then(response => {
                    setReviews(response.data)
                })
                .catch(error => console.error('Error fetching Services', error))
        }

        fetchReviews()
    }, [])

    return (
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
    )
}

export default Reviews


/*
class Profession(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()


*/