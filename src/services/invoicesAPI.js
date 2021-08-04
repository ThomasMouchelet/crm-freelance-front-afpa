import axios from 'axios'
import {INVOICES_URL} from '../config'

function findAll(){
    return axios.get(INVOICES_URL)
         .then(res => res.data["hydra:member"])
}

function deleteInvoice(id){
    return axios.delete(`${INVOICES_URL}/${id}`)
}

function findOneById(id){
    return axios.get(`${INVOICES_URL}/${id}`)
                .then(res => res.data)
}

function create(invoice){
    let parseAmount = parseInt(invoice.amount)
    invoice = {
        ...invoice,
        customer: `/api/customers/${invoice.customer}`,
        sendingAt: new Date(),
        amount: parseAmount
    }
    return axios.post(INVOICES_URL, invoice)
            .then(res => res.data)
}

function update(invoice){
    let parseAmount = parseInt(invoice.amount)
    invoice = {
        ...invoice,
        amount: parseAmount
    }
    return axios.put(INVOICES_URL, invoice)
                .then(res => res.data)
}

const exportFunctions = {
    findAll,
    deleteInvoice,
    findOneById,
    create,
    update
}

export default exportFunctions