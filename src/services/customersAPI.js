import axios from "axios"
import {CUSTOMERS_URL} from '../config'

function findAll(){
    return axios.get(CUSTOMERS_URL)
                .then(res => res.data["hydra:member"])
}

const exportFunctions = {
    findAll,
}

export default exportFunctions