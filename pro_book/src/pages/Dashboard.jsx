import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import ClientDash from './ClientDash'
import ProDash from './ProDash'

const Dashboard = () => {
    const { currentUser } = useAuth()

    const renderDashboard = () => {
        if (!currentUser) {
            return <p>Please <Link to="/login"> Login </Link></p>
        }

        return currentUser.is_pro ? <ProDash /> : <ClientDash />
    }

    return (
        <div>
            <h2>Dashboard</h2>
            {renderDashboard()}
        </div>
    )
}

export default Dashboard
