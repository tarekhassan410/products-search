import "./App.css";
import ProductsPage from "./components/ProductsPage";
import ProductDetails from "./components/ProductDetailsPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-gray-300 min-h-screen">
        <div className="container m-auto pt-10">
          <Switch>
            <Route exact path="/">
              <ProductsPage />
            </Route>
            <Route path="/product/:id">
              <ProductDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
