import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
          <h1 className="title mt-5 mb-5">Web Dinamis CRUD Product</h1>
            <Routes>
              <Route exact path="/" element={<ProductList />}>
              </Route>
              <Route path="/add" element={<AddProduct />}>
              </Route>
              <Route path="/edit/:id" element={<EditProduct />}>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
