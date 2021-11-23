import React from "react";

export default function Banner({name,originalPrice,actualPrice,AddToCart,removeFromCart}){
    const [cartItems, setCartItems] = useState(disabled);
    const [disableVal, setDisable] = useState(false);
    const [cart, setCart] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    function AddToCart(value) {
        setCart(cart + 1);
        setTotalCost(prev => prev + value.price)
        cartItems.push(value);
        setCartItems(cartItems);
        setDisable(true);
      }
    
      function removeFromCart(value) {
        setCart(cart - 1);
        setTotalCost(prev => prev - value.price);
        let index = null;
        for (let val in cartItems) {
          if (cartItems[val].name == value.name && cartItems[val].price == value.price){
            cartItems.splice(val, 1);
            break;
          }
        }
        setDisable(false);
        setCartItems(cartItems);
      }

      function clearCart() {
        setCartItems([]);
        setCart(0);
        setTotalCost(0);
        setDisable(false);
    
      }
    
    return (
        <div className="col mb-5">
        <div className="card h-100">
          <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{name}</h5>
              <span className="text-muted text-decoration-line-through">{originalPrice}</span>
              {actualPrice}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button disabled={cartItems} className="btn btn-outline-dark mt-auto" onClick={() => { AddToCart({ name: "Sale Item", price: 25.00 }); }} >Add to cart</button> 
            </div>
          </div>
        </div>
      </div>

    );

}