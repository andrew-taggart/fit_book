import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to='/'> Home </Link>
            <Link to='/settings'> Settings </Link>
            <Link to="/services"> Services </Link>
            <Link to='/appointments'> Appointments </Link>
            <Link to="/reviews"> Reviews </Link>
        </div>
    )
}

export default Nav