import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Nav = () => {

const { logout } = useAuth()
const navigate = useNavigate()

const handleLogout = () => {
    logout()
    navigate('/login')
}

    return (
        <div>
            <Link to='/'> Dash </Link>
            <Link to='/settings'> Users </Link>
            <Link to="/services"> Services </Link>
            <Link to='/appointments'> Appointments </Link>
            <Link to="/reviews"> Reviews </Link>
            <Link to="/login"> Login </Link>
            <Link to="/signup"> Create-User </Link>
            <button onClick={handleLogout}> LogOut </button>
        </div>
    )
}

export default Nav