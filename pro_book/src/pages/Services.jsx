import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ServiceSearch from './clientPages/ServiceSearch'
import ServiceControl from './proPages/ServiceControl'

const Services = () => {
    const [services, setServices] = useState([])

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

    const renderServicesPage = () => {
        if (!currentUser) {
            return <p>Please <Link to="/login"> Login </Link></p>
        }
        return currentUser.is_pro ? <ServiceControl /> : <ServiceSearch />
    }
    return (
        <div>
            <div>
                <label>
                    Pro/Client Display:
                    <input type="checkbox" checked={currentUser.is_pro} onChange={handleTogglePro} />
                </label>
            </div>
            {renderServicesPage()}
        </div>
    )
}

export default Services