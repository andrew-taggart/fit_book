import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ClientReview from './clientPages/ClientReview'
import ProReview from './proPages/ProReview'

const Reviews = () => {
    //temporary logic to control Client/Pro pages
    const [currentUser, setCurrentUser] = useState({
        is_pro: false
    })

    const handleTogglePro = () => {
        setCurrentUser((prevUser) => ({
            ...prevUser,
            is_pro: !prevUser.is_pro,
        }))
    }//Condense repetitive code into separate file

    const renderReviewsPage = () => {
        if (!currentUser) {
            return <p>Please <Link to="/login"> Login </Link></p>
        }
        return currentUser.is_pro ? <ProReview /> : <ClientReview />
    }

    return (
        <div>
            <div>
                <label>
                    Pro/Client Display:
                    <input type="checkbox" checked={currentUser.is_pro} onChange={handleTogglePro} />
                </label>
            </div>
            {renderReviewsPage()}
        </div>
    )
}

export default Reviews