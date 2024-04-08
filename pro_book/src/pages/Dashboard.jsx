import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import ClientDash from './ClientDash'
import ProDash from './ProDash'

const Dashboard = () => {
    const { currentUser } = useAuth()

    const renderDashboard = () => {
        if (!currentUser) {
            return <p>Please log in.</p>
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
