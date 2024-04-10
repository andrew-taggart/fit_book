import React from 'react'

const EffectHook = () => {
    


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/reviews/')
            .then(response => {
                setReviews(response.data)
            })
            .catch(error => console.error('Error fetching Reviews', error))
    }, [])

//get User
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/users/?is_pro=true')
            .then(response => {
                setPros(response.data)
            })
            .catch(error => console.error('Error fetching Professionals', error))
    }, [])
    
    return (
        <div>
            <h2>Client Dashboard</h2>
            {/* Further implementation */}
        </div>
    )
}

export default EffectHook
const [reviews, setReviews] = useState([])
const [users, setUsers] = useState([])
const [selectedUser, setSelectedUser] = useState('')

const [display, setDisplay] = useState('client')

