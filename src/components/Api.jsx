import axios from 'axios';

const ApiUrl = 'https://jsonplaceholder.typicode.com';

const ConstructUrl = path => {
    return `${ApiUrl}/${path}`
}

class Api {
    static get = (path, success = () => {}) => {
        axios.get(ConstructUrl(path), {})
        .then(
            response => {
                success(response.data); 
            }
        ).catch(
            error => {
                console.log(error)
            }
        )
    }
}

export default Api;