import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import InvoicesPage from "./pages/InvoicesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={InvoicesPage}  />
          {/* <Route path="/customers"  /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
