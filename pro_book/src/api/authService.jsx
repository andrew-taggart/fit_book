import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/'

// Function to login users
export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}api/token/`, { username, password }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.data.access) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Function to get current user data from local storage
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}
