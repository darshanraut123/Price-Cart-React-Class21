import "./App.css";
import Card from "./components/Card";
import { React, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import data from "./Data";

function App() {
  const [apiData, setData] = useState([]);
  const [cart, setCart] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setData(data);
  }, []);

  function addToCart(id) {
    let temp = apiData.filter((val) => val.id === id);

    setCart(cart + 1);
    setTotalCost((prev) => prev + +temp[0].discountedPrice);
    cartItems.push(temp[0]);
    temp = apiData;
    temp.forEach((val) => {
      if (val.id === id) val.btnStatus = true;
    });
    setData(temp);
    setCartItems(cartItems);
  }

  function removeFromCart(id) {
    let temp = apiData.filter((val) => val.id === id);
    setCart(cart - 1);
    setTotalCost((prev) => prev - temp[0].discountedPrice);
    let finalArr = cartItems.filter((res) => res.id !== id);
    setCartItems(finalArr);
    temp = apiData;
    temp.forEach((val) => {
      if (val.id === id) val.btnStatus = false;
    });
    setData(temp);
  }

  function clearCart() {
    setCartItems([]);
    setCart(0);
    setTotalCost(0);
    let temp = apiData;
    temp.forEach((val) => {
      val.btnStatus = false;
    });
    setData(temp);
  }

  return (
    <body>
      <Navbar totalCost={totalCost} cart={cart} />
      <section>
        <button
          onClick={() => {
            clearCart();
          }}
        >
          Clear Cart
        </button>
        <br></br>
        Cart Items :{" "}
        {cartItems.map((res) => {
          return (
            <>
              <div>
                #Name:{res.title} #Price:{res.discountedPrice}{" "}
                <button
                  onClick={() => {
                    removeFromCart(res.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          );
        })}
      </section>

      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                </div>
              </div>
            </div>
            {apiData.map((d) => (
              <Card
                key={d.id}
                object={d}
                addToCart={addToCart}
                setData={setData}
              />
            ))}

          </div>
        </div>
      </section>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
    </body>
  );
}

export default App;
