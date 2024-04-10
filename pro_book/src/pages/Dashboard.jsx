import React, { useState } from 'react'
//import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import ClientDash from './ClientDash'
import ProDash from './ProDash'

const Dashboard = () => {
    //const { currentUser } = useAuth()

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

    const renderDashboard = () => {
        if (!currentUser) {
            return <p>Please <Link to="/login"> Login </Link></p>
        }

        return currentUser.is_pro ? <ProDash /> : <ClientDash />
    }

    return (
        <div>
            <h2>Toggle Dash</h2>
            <div>
                <label>
                    Pro Display:
                    <input type="checkbox" checked={currentUser.is_pro} onChange={handleTogglePro} />
                </label>
            </div>
            {renderDashboard()}
        </div>
    )
}

export default Dashboard
