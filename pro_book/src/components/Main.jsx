import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Settings from '../pages/Settings'
import Services from '../pages/Services'
import Appointments from '../pages/Appointments'
import Reviews from '../pages/Reviews'
import Dash from '../pages/Dashboard'
import LoginPage from '../pages/LoginPage'
import CreateUser from '../pages/CreateUser'

const Main = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Dash/>} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/services" element={<Services />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<CreateUser />} />
            </Routes>
        </div>
    )
}

export default Main