import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout";
import Home from "./Page/Home/Home.js";
import Account from "./Page/Account/Account.js";
import Category from "./Page/Category/Category.js";
import Shopping from "./Page/Shopping-card/Shopping.js";
import Register from "./components/Register.js";
import Product from "./components/Product.js";
import { CartProvider } from "./context/CartContext.js";
import {useEffect,useState} from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        // 로그인 상태 확인 API 호출
        fetch("http://localhost:8000/auth/protected", {
            credentials: "include",
        })
            .then((res) => res.ok ? res.json() : null)
            .then((data) => {
                if (data) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            })
            .catch((err) => {
                console.error("로그인 상태 확인 실패:", err);
            });
    }, []);
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path=""
            element={
              <DefaultLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="/home"
            element={
              <DefaultLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path="/account"
            element={
              <DefaultLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                <Account setIsLoggedIn={setIsLoggedIn}/>
              </DefaultLayout>
            }
          />
          <Route
            path="/register"
            element={
              <DefaultLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                <Register />
              </DefaultLayout>
            }
          />
          <Route
            path="/product-detail"
            element={
              <DefaultLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                <Product />
              </DefaultLayout>
            }
          />
          <Route
            path="/category/:type"
            element={
              <DefaultLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                <Category />
              </DefaultLayout>
            }
          />
          <Route
            path="/shopping"
            element={
              <DefaultLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                <Shopping />
              </DefaultLayout>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
