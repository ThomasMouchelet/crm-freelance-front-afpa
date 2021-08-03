import { useEffect, useState } from "react";
import invoicesAPI from '../services/invoicesAPI'

const InvoicesPage = () => {
    const [invoices, setInvoices] = useState([])

    useEffect(() => {
        console.log("UseEffect")
        fetchAllInvoices()
    }, [])

    const fetchAllInvoices = async () => {
        try {
            const data = await invoicesAPI.findAll()
            console.log(data)
            setInvoices(data)
        } catch (error) {
            console.log(error)
        }
    }

    return ( <h1>Invoices Page</h1> );
}
 
export default InvoicesPage;