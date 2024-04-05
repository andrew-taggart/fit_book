import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Settings from '../pages/Settings'
import Services from '../pages/Services'
import Appointments from '../containers/Appointments'
import Users from './Users'
import Reviews from '../pages/Reviews'

const Main = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/services" element={<Services />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/users" element={<Users />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    )
}

export default Main