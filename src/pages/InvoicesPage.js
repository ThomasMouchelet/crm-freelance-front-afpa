import { useEffect, useState } from "react";
import invoicesAPI from '../services/invoicesAPI'
import {Link} from "react-router-dom";
import { toast } from 'react-toastify';

const InvoicesPage = () => {
    const [invoices, setInvoices] = useState([])

    useEffect(() => {
        fetchAllInvoices()
    }, [])

    const fetchAllInvoices = async () => {
        try {
            const data = await invoicesAPI.findAll()
            setInvoices(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        // invoices.slice(el => el.id === id)
        // console.log(invoices)
        try {
            await invoicesAPI.deleteInvoice(id)
            fetchAllInvoices()
            toast("Delete Success");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Invoices Page</h1>

            <Link to="/invoices/create">
                <button className="btn btn-primary">Ajouter une facture</button>
            </Link>

            <table className="table">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Amount</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {invoices.map(invoice => (
                    <tr key={invoice.id}>
                        <th>{invoice.customer && invoice.customer.companyName}</th>
                        <th>{invoice.amount}</th>
                        <th>{invoice.statut}</th>
                        <th>
                            <button className="btn btn-danger" onClick={() => handleDelete(invoice.id)}>Delete</button>
                            <Link to={`/invoices/${invoice.id}`}>
                                <button className="btn btn-secondary ms-3">Edit</button>
                            </Link>
                        </th>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
     );
}
 
export default InvoicesPage;