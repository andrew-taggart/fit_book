import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to='/'> Dash </Link>
            <Link to='/settings'> Users </Link>
            <Link to="/services"> Services </Link>
            <Link to='/appointments'> Appointments </Link>
            <Link to="/reviews"> Reviews </Link>
        </div>
    )
}

export default Nav