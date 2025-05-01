import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout";
import Home from "./Page/Home/Home.js";
import Account from "./Page/Account/Account.js";
import Category from "./Page/Category/Category.js";
import Shopping from "./Page/Shopping-card/Shopping.js";
import Register from "./components/Register.js";
import Product from "./components/Product.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path=""
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />

          <Route
            path="/home"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="/account"
            element={
              <DefaultLayout>
                <Account />
              </DefaultLayout>
            }
          />
          <Route
            path="/register"
            element={
              <DefaultLayout>
                <Register />
              </DefaultLayout>
            }
          />
          <Route
            path="/product-detail"
            element={
              <DefaultLayout>
                <Product />
              </DefaultLayout>
            }
          />
          <Route
            path="/category"
            element={
              <DefaultLayout>
                <Category />
              </DefaultLayout>
            }
          />
          <Route
            path="/shopping"
            element={
              <DefaultLayout>
                <Shopping />
              </DefaultLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
