import { Input } from 'reactstrap';
import axios from '../axios';
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}
const GetAllUser = (id) => {
    return axios.get('/api/get-all-user', { id: inputId });

}

export { handleLoginApi, GetAllUser }
