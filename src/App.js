import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import InvoicesPage from "./pages/InvoicesPage";
import CustomersPage from "./pages/CustomersPage";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InvoiceForm from "./pages/InvoiceForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar d-flex justify-content-center">
          <Link to="/" className="nav-item px-2">Invoices</Link>
          <Link to="/customers" className="nav-item px-2">Customers</Link>
        </nav>
        <Switch>
          <div className="container">
            <Route path="/customers" component={CustomersPage} />
            <Route path="/" component={InvoicesPage} exact />
            <Route path="/invoices/:invoice_id" component={InvoiceForm} />
          </div>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
