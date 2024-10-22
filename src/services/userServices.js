import { Input } from 'reactstrap';
import axios from '../axios';
const handleLoginApi = (userEmail, userPassword, userfirstName,userlastName) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword, firstName: userfirstName, lastName: userlastName });
}
const GetAllUser = (inputId) => {
    return axios.get(`/api/get-all-user?id=${inputId}`)

}


export { handleLoginApi, GetAllUser }
