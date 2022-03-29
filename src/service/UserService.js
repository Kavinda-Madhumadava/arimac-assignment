import axios from 'axios'

export default class UserService {
    getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // console.log("respnse",response)
            return response.data
        })
}