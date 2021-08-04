import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import invoicesAPI from '../services/invoicesAPI'
import customersAPI from '../services/customersAPI'

const InvoiceForm = () => {
    const {invoice_id} = useParams()
    const [invoice, setInvoice] = useState({})
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        console.log("invoice_id",invoice_id)
        if(invoice_id !== "create"){
            fetchInvoice()
        }
        fetAllCustomers()
    }, [])

    const fetAllCustomers = async () =>{
        try {
            const data = await customersAPI.findAll()
            setCustomers(data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchInvoice = async () => {
        try {
            const data = await invoicesAPI.findOneById(invoice_id)
            setInvoice(data)
        } catch (error) {
            console.log(error)
            toast('Erreur de chargement des données')
        }
    }

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget
        setInvoice({
            ...invoice,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let data
            let message
            if(invoice_id === "create"){
                data = await invoicesAPI.create(invoice)
                message = "Ajouté avec succès"
            }else{
                data = await invoicesAPI.update(invoice)
                message = "Modifié avec succès"
            }
            setInvoice(data)
            toast(message)
        } catch (error) {
            console.log('error')
            toast('Erreur rencontré')
        }
    }
    
    return ( 
        <div>
           <form action="" className="d-flex flex-column" onSubmit={handleSubmit}>
               <input 
                type="number" 
                placeholder="amount" 
                className="p-2 m-2"
                onChange={handleChange}
                name="amount"
                value={invoice.amount}
                />
               <select name="statut" id="" className="p-2 m-2" onChange={handleChange}>
                   <option value="">--SELECT STATUT--</option>
                   <option value="paid">Paid</option>
                   <option value="paid">Paid</option>
                   <option value="send">Send</option>
                   <option value="cancel">cancel</option>
               </select>
               <select name="customer" id="" name="customer" onChange={handleChange}>
                    <option value="">--SELECT CUSTOMER--</option>
                    {customers.map(customer => (
                        <option key={customer.id} value={customer.id}>{customer.companyName}</option>
                    ))}
               </select>
               <input type="submit" value={invoice_id === "create" ? 'Ajouter' : 'Editer'} className="btn btn-primary" />
           </form>
        </div> 
    );
}
 
export default InvoiceForm;