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

    return (
        <div>
            <h1>Invoices Page</h1>
            <ul>
                {invoices.map(invoice => (
                    <li><strong>{invoice.customer.companyName} :</strong> {invoice.amount} - {invoice.statut}</li>
                ))}
            </ul>
        </div>
     );
}
 
export default InvoicesPage;